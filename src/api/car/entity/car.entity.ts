import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('car')
export class CarEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name:string;

  @Column()
  category: string;

  @Column()
  price: number;

  @Column({ type: 'boolean', default: false })
  status: boolean;

  @Column()
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}
