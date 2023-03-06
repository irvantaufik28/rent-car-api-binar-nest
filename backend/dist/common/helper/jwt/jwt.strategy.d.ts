import { Strategy } from 'passport-jwt';
import { UserRepository } from 'src/api/user/repository/user.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: any): Promise<{
        id: number;
        email: string;
        role_name: import("../../enum/enum").SecurityType.CUSTOMER;
    }>;
}
export {};
