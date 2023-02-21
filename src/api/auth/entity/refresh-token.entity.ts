import { UserEntity } from 'src/api/user/entity/user.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('refresh_token')
export class RefreshTokenEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  isRevokde: boolean;

  @Column()
  expired_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.refreshToken)
  user: UserEntity
}
