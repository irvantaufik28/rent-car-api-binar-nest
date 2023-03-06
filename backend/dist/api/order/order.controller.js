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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const get_user_decorator_1 = require("../../common/decorator/get-user.decorator");
const roles_decorator_1 = require("../../common/decorator/roles.decorator");
const enum_1 = require("../../common/enum/enum");
const jwt_role_guard_1 = require("../../common/guard/jwt-role.guard");
const jwt_guard_1 = require("../../common/guard/jwt.guard");
const page_options_dto_1 = require("../../common/pageDTO/page-options.dto");
const order_produce_service_1 = require("../queue/producer/order.produce.service");
const user_entity_1 = require("../user/entity/user.entity");
const create_order_dto_1 = require("./dto/create-order.dto");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    constructor(orderService, orderProduceService) {
        this.orderService = orderService;
        this.orderProduceService = orderProduceService;
    }
    async gerOrderPagination(pageOptionsDto) {
        return this.orderService.getAllOrderPage(pageOptionsDto);
    }
    async createOrderService(payload, request) {
        const order = await this.orderProduceService.createOrder(payload, request.id);
        return order;
    }
    async getOrderReport(from, until) {
        return await this.orderService.getOrderReport({ from, until });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "gerOrderPagination", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enum_1.SecurityType.CUSTOMER),
    (0, common_1.UseGuards)(jwt_guard_1.JwGuard, jwt_role_guard_1.RolesGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto,
        user_entity_1.UserEntity]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrderService", null);
__decorate([
    (0, common_1.Get)('report'),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('until')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderReport", null);
OrderController = __decorate([
    (0, common_1.Controller)('order'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        order_produce_service_1.OrderProducerService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map