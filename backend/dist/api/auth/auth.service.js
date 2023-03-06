"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../user/repository/user.repository");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(JwtService, userRepository) {
        this.JwtService = JwtService;
        this.userRepository = userRepository;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new common_1.HttpException('email or password not incorect', common_1.HttpStatus.NOT_FOUND);
        }
        if (!bcrypt.compareSync(password, user.password)) {
            throw new common_1.HttpException('email or password not incorect', common_1.HttpStatus.FORBIDDEN);
        }
        const access_token = await this.createAccessToken(user);
        return { access_token };
    }
    async createAccessToken(user) {
        const payload = {
            id: user.id,
            role_name: user.role_name,
        };
        const access_token = await this.JwtService.signAsync(payload);
        return access_token;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_repository_1.UserRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map