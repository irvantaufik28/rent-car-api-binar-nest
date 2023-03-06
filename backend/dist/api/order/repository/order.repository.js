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
exports.OrderRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const page_meta_dto_1 = require("../../../common/pageDTO/page-meta.dto");
const page_dto_1 = require("../../../common/pageDTO/page.dto");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("../entity/order.entity");
let OrderRepository = class OrderRepository extends typeorm_2.Repository {
    constructor(orderRepository) {
        super(orderRepository.target, orderRepository.manager, orderRepository.queryRunner);
        this.orderRepository = orderRepository;
        this.getAllOrderPagination = async (pageOptionsDto) => {
            const queryBuilder = this.orderRepository.createQueryBuilder('order');
            queryBuilder
                .orderBy('order.createdAt', pageOptionsDto.order)
                .skip(pageOptionsDto.skip)
                .take(pageOptionsDto.take);
            const itemCount = await queryBuilder.getCount();
            const { entities } = await queryBuilder.getRawAndEntities();
            const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
            return new page_dto_1.PageDto(entities, pageMetaDto);
        };
        this.createOrder = async (createOrderDto) => {
            const { total_price, start_rent_at, finish_rent_at, status, UserId, CarId, } = createOrderDto;
            const order = createOrderDto;
            order.total_price = total_price;
            order.start_rent_at = start_rent_at;
            order.finish_rent_at = finish_rent_at;
            order.status = status;
            order.UserId = UserId;
            order.CarId = CarId;
            return await this.orderRepository.save(order);
        };
        this.orderReport = async (params) => {
            let filter = {};
            if (params.from !== undefined && params.until !== undefined) {
                filter = {
                    createdAt: (0, typeorm_2.Raw)((alias) => `DATE(${alias}) >= :date AND DATE(${alias}) <= :to`, {
                        date: params.from,
                        to: params.until,
                    }),
                };
            }
            const order = this.orderRepository.find({
                where: filter,
            });
            return order;
        };
    }
};
OrderRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.OrderEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderRepository);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map