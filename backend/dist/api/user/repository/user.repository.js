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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
const bcrypt = require("bcrypt");
const typeorm_2 = require("@nestjs/typeorm");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor(userRepository) {
        super(userRepository.target, userRepository.manager, userRepository.queryRunner);
        this.userRepository = userRepository;
    }
    async createUser(createUSerDto) {
        const { email, password, confirm_password } = createUSerDto;
        const user = createUSerDto;
        user.email = email;
        user.password = bcrypt.hashSync(password, 10);
        user.confirm_password = confirm_password;
        if (!bcrypt.compareSync(user.confirm_password, user.password)) {
            throw new common_1.HttpException('password and confirm password not match', common_1.HttpStatus.FORBIDDEN);
        }
        const savedUser = await this.userRepository.save(user);
        delete savedUser.confirm_password;
        delete savedUser.password;
        return savedUser;
    }
    async findById(id, option = {}) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
            select: ['id', 'email', 'role_name'],
            relations: option,
        });
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        return user;
    }
};
UserRepository = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map