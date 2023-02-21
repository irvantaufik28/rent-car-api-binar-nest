import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser (createUSerDto: CreateUserDto): Promise<CreateUserDto> {
        const user = await this.userRepository.createUser(createUSerDto);
        return user;
    }
}
