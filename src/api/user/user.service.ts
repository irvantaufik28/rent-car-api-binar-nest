import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';
import { UserDetailRepository } from './repository/user-detail.repository';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userDetailRepository: UserDetailRepository,
  ) {}

  async createUser(createUSerDto: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.userRepository.createUser(createUSerDto);

    return user;
  }

  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
