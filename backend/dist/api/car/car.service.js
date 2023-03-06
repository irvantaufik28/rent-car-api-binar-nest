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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const car_repository_1 = require("./repository/car.repository");
let CarService = class CarService {
    constructor(carRepository, cloudinaryService) {
        this.carRepository = carRepository;
        this.cloudinaryService = cloudinaryService;
        this.getCarById = async (id) => {
            const car = await this.carRepository.getCarById(id);
            if (!car) {
                throw new common_1.HttpException('car not found', common_1.HttpStatus.NOT_FOUND);
            }
            return car;
        };
        this.updateCar = async (id, updateCarDto) => {
            const car = await this.carRepository.getCarById(id);
            if (!car) {
                throw new common_1.HttpException('car not found', common_1.HttpStatus.NOT_FOUND);
            }
            return await this.carRepository.updateCar(id, updateCarDto);
        };
        this.deleteCar = async (id) => {
            const car = await this.carRepository.getCarById(id);
            if (!car) {
                throw new common_1.HttpException('car not found', common_1.HttpStatus.NOT_FOUND);
            }
            await this.carRepository.delete(id);
            return new common_1.HttpException('delete successfully', common_1.HttpStatus.OK);
        };
    }
    async createCar(createCarDto, file) {
        if (file) {
            const imagaUrl = await this.cloudinaryService.uploadImage(file);
            createCarDto.image = imagaUrl.url;
        }
        return await this.carRepository.createCar(createCarDto);
    }
    async getAllCarPage(pageOptionsDto) {
        const result = await this.carRepository.getAllCarPagination(pageOptionsDto);
        const res = {
            page: result.meta.page,
            pageSize: result.meta.take,
            pageCount: result.meta.pageCount,
            Count: result.meta.itemCount,
            cars: result.cars,
        };
        return res;
    }
};
CarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [car_repository_1.CarRepository,
        cloudinary_service_1.CloudinaryService])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map