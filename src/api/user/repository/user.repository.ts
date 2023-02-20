import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateUSerDto } from '../dto/create-user.dto';
import { UserEntity } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async createUser(createUSerDto: CreateUSerDto): Promise<UserEntity> {
    const { email, password } = createUSerDto;
    const user = new UserEntity();
    user.email = email;
    user.password = await bcrypt.hashSync(password, 10);

    const savedUser = await this.save(user);

    return savedUser;
  }
}
