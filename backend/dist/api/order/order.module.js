"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const car_entity_1 = require("../car/entity/car.entity");
const car_repository_1 = require("../car/repository/car.repository");
const events_gateway_1 = require("../events/events.gateway");
const notification_entity_1 = require("../notification/entity/notification.entity");
const notification_service_1 = require("../notification/notification.service");
const notification_repository_1 = require("../notification/repository/notification.repository");
const order_produce_service_1 = require("../queue/producer/order.produce.service");
const order_entity_1 = require("./entity/order.entity");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_repository_1 = require("./repository/order.repository");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.OrderEntity, car_entity_1.CarEntity, notification_entity_1.NotificationsEntity]),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST,
                    port: parseInt(process.env.REDIS_PORT),
                },
            }),
            bull_1.BullModule.registerQueue({
                name: 'order-queue',
            }),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [
            order_service_1.OrderService,
            order_repository_1.OrderRepository,
            car_repository_1.CarRepository,
            order_produce_service_1.OrderProducerService,
            notification_service_1.NotificationService,
            notification_repository_1.NotificationRepository,
            events_gateway_1.EventsGateway,
        ],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map