import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDetailEntity } from '../entity/user-detail.entity';
import { DataSource } from 'typeorm';
export declare class UserDetailRepository extends Repository<UserDetailEntity> {
    private userDetailRepository;
    private dataSoucer;
    constructor(userDetailRepository: Repository<UserDetailEntity>, dataSoucer: DataSource);
    createDetailUser(createUserDto: CreateUserDto): Promise<CreateUserDto>;
}
