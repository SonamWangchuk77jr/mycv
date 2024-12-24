import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reports')
export class Reports {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;
}
