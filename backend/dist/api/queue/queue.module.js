"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const car_consumer_1 = require("./consumer/car.consumer");
const car_produce_service_1 = require("./producer/car.produce.service");
const car_repository_1 = require("../car/repository/car.repository");
const typeorm_1 = require("@nestjs/typeorm");
const car_entity_1 = require("../car/entity/car.entity");
const car_service_1 = require("../car/car.service");
const order_service_1 = require("../order/order.service");
const order_repository_1 = require("../order/repository/order.repository");
const order_entity_1 = require("../order/entity/order.entity");
const notification_service_1 = require("../notification/notification.service");
const notification_entity_1 = require("../notification/entity/notification.entity");
const notification_repository_1 = require("../notification/repository/notification.repository");
const events_gateway_1 = require("../events/events.gateway");
const order_consumer_1 = require("./consumer/order.consumer");
const order_produce_service_1 = require("./producer/order.produce.service");
const cloudinary_provider_1 = require("../cloudinary/cloudinary.provider");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let QueueModule = class QueueModule {
};
QueueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([car_entity_1.CarEntity, order_entity_1.OrderEntity, notification_entity_1.NotificationsEntity]),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST,
                    port: parseInt(process.env.REDIS_PORT),
                },
            }),
            bull_1.BullModule.registerQueue({
                name: 'car-queue',
            }, {
                name: 'order-queue',
            }),
        ],
        exports: [car_consumer_1.CarCounsumer, car_produce_service_1.CarProducerService],
        providers: [
            order_consumer_1.OrderCounsumer, order_produce_service_1.OrderProducerService,
            car_consumer_1.CarCounsumer,
            car_produce_service_1.CarProducerService,
            car_service_1.CarService,
            car_repository_1.CarRepository,
            order_service_1.OrderService,
            order_repository_1.OrderRepository,
            notification_service_1.NotificationService,
            notification_repository_1.NotificationRepository,
            events_gateway_1.EventsGateway,
            cloudinary_provider_1.CloudinaryProvider,
            cloudinary_service_1.CloudinaryService
        ],
        controllers: [],
    })
], QueueModule);
exports.QueueModule = QueueModule;
//# sourceMappingURL=queue.module.js.map