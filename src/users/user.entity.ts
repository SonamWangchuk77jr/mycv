import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reports } from 'src/reports/report.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => Reports, (report) => report.user)
  reports: Reports[];

  // @AfterInsert()
  // logInsert() {
  //   console.log('Inserted user with id', this.id);
  // }
}
