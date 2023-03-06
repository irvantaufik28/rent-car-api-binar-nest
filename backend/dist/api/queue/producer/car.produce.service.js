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
exports.CarProducerService = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const car_service_1 = require("../../car/car.service");
let CarProducerService = class CarProducerService {
    constructor(queue, carService) {
        this.queue = queue;
        this.carService = carService;
    }
    async getById(id) {
        const car = await this.carService.getCarById(id);
        const result = await this.queue.add('getAll-job', {
            data: car,
        });
        return result.data;
    }
};
CarProducerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)('car-queue')),
    __metadata("design:paramtypes", [Object, car_service_1.CarService])
], CarProducerService);
exports.CarProducerService = CarProducerService;
//# sourceMappingURL=car.produce.service.js.map