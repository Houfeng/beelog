import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  VirtualColumn,
} from "noka-orm";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  title!: string;

  @VirtualColumn({ query: () => "" })
  count!: number;
}
