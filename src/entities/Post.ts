import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "noka-orm";
import { Tag } from "./Tag";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @ManyToMany(() => Tag)
  tags!: Tag[];

  /** 在系统中的创建时间 */
  @Column({ default: () => Date.now() })
  createAt?: number;

  /** 在系统中的最后更新时间 */
  @Column({ transformer: { from: (t) => t, to: () => Date.now() } })
  updateAt?: number;
}
