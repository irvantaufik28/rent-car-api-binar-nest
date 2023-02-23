import { SecurityType } from 'src/common/enum/enum';
import { Exclude } from "class-transformer";
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserDetailEntity } from './user-detail.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @Column({
    nullable: false,
    enum: SecurityType,
    type: String,
    default: SecurityType.CUSTOMER,
  })
  role_name: SecurityType.CUSTOMER;

  @OneToOne(() => UserDetailEntity, (userDetail) => userDetail.user_detail)
  user_detail: UserDetailEntity;
}
