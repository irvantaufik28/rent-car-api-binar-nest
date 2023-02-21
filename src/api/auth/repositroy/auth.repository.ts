import { UserEntity } from 'src/api/user/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { RefreshTokenEntity } from '../entity/refresh-token.entity';

export class AuthRepository extends Repository<RefreshTokenEntity> {
  constructor(private dataSource: DataSource) {
    super(RefreshTokenEntity, dataSource.createEntityManager());
  }
  async createRefreshToken(
    user: UserEntity,
    ttl: number,
  ): Promise<RefreshTokenEntity> {
    const refresh_token = this.create();
    refresh_token.user = user;
    refresh_token.isRevokde = false;

    const expired_at = new Date();
    expired_at.setDate(expired_at.getDate() + ttl);
    refresh_token.expired_at = expired_at;

    return await refresh_token.save();
  }
}
