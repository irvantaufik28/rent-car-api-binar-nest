import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/repository/user.repository';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from '../user/entity/user.entity';
export declare class AuthService {
    private readonly JwtService;
    private readonly userRepository;
    constructor(JwtService: JwtService, userRepository: UserRepository);
    login(loginDto: LoginDto): Promise<any>;
    createAccessToken(user: UserEntity): Promise<string>;
}
