import { RefreshTokenEntity } from 'src/api/auth/entity/refresh-token.entity';
import { SecurityType } from 'src/common/enum/enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, enum: SecurityType, type: String, default: SecurityType.CUSTOMER})
  role_name: SecurityType.CUSTOMER;

  @OneToMany(() => RefreshTokenEntity, (refreshToken) => refreshToken.user, {
    eager: true,
  })
  refreshToken: RefreshTokenEntity[];
}
