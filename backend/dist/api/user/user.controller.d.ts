import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(payload: CreateUserDto): Promise<CreateUserDto>;
    getUserById(request: UserEntity): Promise<UserEntity>;
}
