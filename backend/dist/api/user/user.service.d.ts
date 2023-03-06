import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';
import { UserDetailRepository } from './repository/user-detail.repository';
import { UserRepository } from './repository/user.repository';
export declare class UserService {
    private readonly userRepository;
    private readonly userDetailRepository;
    constructor(userRepository: UserRepository, userDetailRepository: UserDetailRepository);
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto>;
    getUserById(id: number): Promise<UserEntity>;
}
