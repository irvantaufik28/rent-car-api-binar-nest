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
exports.UserEntity = void 0;
const enum_1 = require("../../../common/enum/enum");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const user_detail_entity_1 = require("./user-detail.entity");
const order_entity_1 = require("../../order/entity/order.entity");
let UserEntity = class UserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        enum: enum_1.SecurityType,
        type: String,
        default: enum_1.SecurityType.CUSTOMER,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "role_name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_detail_entity_1.UserDetailEntity, (userDetail) => userDetail.user_detail),
    __metadata("design:type", user_detail_entity_1.UserDetailEntity)
], UserEntity.prototype, "user_detail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.OrderEntity, (o) => o.id),
    __metadata("design:type", Array)
], UserEntity.prototype, "order", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map