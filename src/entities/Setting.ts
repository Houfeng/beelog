import { Column, Entity, PrimaryGeneratedColumn } from "noka-orm";

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({ nullable: true })
  name!: string;

  @Column({ nullable: true })
  avatar!: string;

  @Column({ nullable: true })
  description!: string;

  @Column()
  account!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  pageHead?: string;

  @Column({ nullable: true })
  pageBody?: string;
}
