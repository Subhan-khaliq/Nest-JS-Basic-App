import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  productname: string;

  @Column({ nullable: true })
  price: number;

  @ManyToOne(() => User, (user: User) => user.products)
  public user: User;
}
