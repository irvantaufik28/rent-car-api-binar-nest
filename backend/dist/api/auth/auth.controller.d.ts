import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { loginResponse } from './interface/login.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<loginResponse>;
}
