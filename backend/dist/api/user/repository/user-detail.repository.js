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
exports.UserDetailRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_detail_entity_1 = require("../entity/user-detail.entity");
const typeorm_3 = require("typeorm");
let UserDetailRepository = class UserDetailRepository extends typeorm_2.Repository {
    constructor(userDetailRepository, dataSoucer) {
        super(userDetailRepository.target, userDetailRepository.manager, userDetailRepository.queryRunner);
        this.userDetailRepository = userDetailRepository;
        this.dataSoucer = dataSoucer;
    }
    async createDetailUser(createUserDto) {
        const { user_id, first_name, last_name, phone_number, address } = createUserDto;
        const user_detail = createUserDto;
        user_detail.first_name = first_name;
        user_detail.last_name = last_name;
        user_detail.phone_number = phone_number;
        user_detail.address = address;
        user_detail.user_id = user_id;
        const queryRunner = this.dataSoucer.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        return await this.userDetailRepository.save(user_detail);
    }
};
UserDetailRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_detail_entity_1.UserDetailEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_3.DataSource])
], UserDetailRepository);
exports.UserDetailRepository = UserDetailRepository;
//# sourceMappingURL=user-detail.repository.js.map