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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const car_repository_1 = require("../car/repository/car.repository");
const notification_service_1 = require("../notification/notification.service");
const order_repository_1 = require("./repository/order.repository");
let OrderService = class OrderService {
    constructor(orderRepository, carRepository, notificationService) {
        this.orderRepository = orderRepository;
        this.carRepository = carRepository;
        this.notificationService = notificationService;
    }
    async getAllOrderPage(pageOptionsDto) {
        const result = this.orderRepository.getAllOrderPagination(pageOptionsDto);
        return result;
    }
    async createOrder(createOrderDto, userId) {
        const car = await this.carRepository.getCarById(createOrderDto.CarId);
        if (!car) {
            const createNotificationDto = {
                recipient_id: 2,
                sender_id: userId,
                content: `gagal ${userId}`,
            };
            await this.notificationService.createNotif(createNotificationDto);
        }
        if (car.status === true) {
            throw new common_1.HttpException('car not available', common_1.HttpStatus.NOT_FOUND);
        }
        createOrderDto.UserId = userId;
        createOrderDto.total_price = car.price;
        createOrderDto.status = true;
        createOrderDto.slip = 'ini slip';
        const order = await this.orderRepository.createOrder(createOrderDto);
        const updateCar = {
            status: true,
            start_rent_at: order.start_rent_at,
            finish_rent_at: order.finish_rent_at,
        };
        await this.carRepository.update(car.id, updateCar);
        const createNotificationDto = {
            recipient_id: 2,
            sender_id: userId,
            content: `Ada Pesanan dari ${userId}`,
        };
        await this.notificationService.createNotif(createNotificationDto);
        return order;
    }
    async getOrderReport(params) {
        const orders = await this.orderRepository.orderReport(params);
        const orderCountByDate = {};
        for (const order of orders) {
            const orderDate = new Date(order.createdAt)
                .toISOString()
                .substring(0, 10);
            if (orderCountByDate[orderDate]) {
                orderCountByDate[orderDate]++;
            }
            else {
                orderCountByDate[orderDate] = 1;
            }
        }
        const result = Object.entries(orderCountByDate).map(([date, orderCount]) => ({
            date,
            orderCount: orderCount,
        }));
        return result;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository,
        car_repository_1.CarRepository,
        notification_service_1.NotificationService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map