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
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const roles_decorator_1 = require("../../common/decorator/roles.decorator");
const enum_1 = require("../../common/enum/enum");
const jwt_role_guard_1 = require("../../common/guard/jwt-role.guard");
const jwt_guard_1 = require("../../common/guard/jwt.guard");
const page_car_options_dto_1 = require("../../common/pageDTO/page-car-options.dto");
const car_produce_service_1 = require("../queue/producer/car.produce.service");
const car_service_1 = require("./car.service");
const car_create_dto_1 = require("./dto/car-create.dto");
let CarController = class CarController {
    constructor(carService, carProducerService) {
        this.carService = carService;
        this.carProducerService = carProducerService;
    }
    async createCar(payload, file) {
        const car = await this.carService.createCar(payload, file);
        return car;
    }
    async getCarPagination(pageOptionDto) {
        return await this.carService.getAllCarPage(pageOptionDto);
    }
    async getCarById(id) {
        const result = await this.carProducerService.getById(id);
        return result.data;
    }
    async updateCar(id, payload) {
        return this.carService.updateCar(id, payload);
    }
    async deleteCar(id) {
        const result = this.carService.deleteCar(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_create_dto_1.CreateCarDto, Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "createCar", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_car_options_dto_1.PageCarOptionsDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "getCarPagination", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "getCarById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, roles_decorator_1.Roles)(enum_1.SecurityType.STAF),
    (0, common_1.UseGuards)(jwt_guard_1.JwGuard, jwt_role_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, car_create_dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "updateCar", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, roles_decorator_1.Roles)(enum_1.SecurityType.STAF),
    (0, common_1.UseGuards)(jwt_guard_1.JwGuard, jwt_role_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "deleteCar", null);
CarController = __decorate([
    (0, common_1.Controller)('car'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [car_service_1.CarService,
        car_produce_service_1.CarProducerService])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map