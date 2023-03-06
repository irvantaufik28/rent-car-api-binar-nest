import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entity/user.entity';
export declare class UserRepository extends Repository<UserEntity> {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUSerDto: CreateUserDto): Promise<CreateUserDto>;
    findById(id: number, option?: object): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
}
