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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_detail_repository_1 = require("./repository/user-detail.repository");
const user_repository_1 = require("./repository/user.repository");
let UserService = class UserService {
    constructor(userRepository, userDetailRepository) {
        this.userRepository = userRepository;
        this.userDetailRepository = userDetailRepository;
    }
    async createUser(createUserDto) {
        const user = await this.userRepository.createUser(createUserDto);
        createUserDto.user_id = user.id;
        await this.userDetailRepository.createDetailUser(createUserDto);
        return user;
    }
    async getUserById(id) {
        const inculde = {
            user_detail: true,
        };
        const user = await this.userRepository.findById(id, inculde);
        if (!user) {
            throw new common_1.HttpException('user not found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        user_detail_repository_1.UserDetailRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map