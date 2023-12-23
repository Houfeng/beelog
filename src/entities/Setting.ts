import { Column, Entity, PrimaryGeneratedColumn } from "noka-orm";

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name!: string;

  @Column()
  avatar!: string;

  @Column()
  description!: string;

  @Column()
  account!: string;

  @Column()
  password!: string;

  @Column()
  pageHead?: string;

  @Column()
  pageBody?: string;
}
