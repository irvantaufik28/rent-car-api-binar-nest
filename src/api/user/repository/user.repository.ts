import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async createUser(createUSerDto: CreateUserDto): Promise<CreateUserDto> {
    const { email, password, confirm_password } = createUSerDto;
    const user = createUSerDto;
    user.email = email;
    user.password = await bcrypt.hashSync(password, 10);
    user.confirm_password = confirm_password;
    if (!bcrypt.compareSync(user.confirm_password, user.password)) {
      throw new HttpException(
        'password and confirm password not match',
        HttpStatus.FORBIDDEN,
      );
    }
    delete user.confirm_password;
    const savedUser = await this.save(user);

    return savedUser;
  }

  async findById(id: number): Promise<UserEntity> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}
