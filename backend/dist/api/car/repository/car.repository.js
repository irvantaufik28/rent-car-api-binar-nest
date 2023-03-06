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
exports.CarRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const page_meta_dto_1 = require("../../../common/pageDTO/page-meta.dto");
const page_dto_1 = require("../../../common/pageDTO/page.dto");
const typeorm_2 = require("typeorm");
const car_entity_1 = require("../entity/car.entity");
let CarRepository = class CarRepository extends typeorm_2.Repository {
    constructor(carRepository) {
        super(carRepository.target, carRepository.manager, carRepository.queryRunner);
        this.carRepository = carRepository;
        this.getAllCarPagination = async (pageOptionsDto) => {
            const queryBuilder = this.carRepository.createQueryBuilder('car');
            if (pageOptionsDto.name) {
                queryBuilder.andWhere('LOWER(car.name) LIKE :name', {
                    name: `%${pageOptionsDto.name.toLowerCase()}%`,
                });
            }
            if (pageOptionsDto.category) {
                queryBuilder.andWhere('car.category = :category', {
                    category: `${pageOptionsDto.category.toLowerCase()}`,
                });
            }
            if (pageOptionsDto.isRented) {
                queryBuilder.andWhere('car.status = :isRented', {
                    isRented: `${pageOptionsDto.isRented.toLocaleLowerCase()}`,
                });
            }
            if (pageOptionsDto.maxPrice) {
                queryBuilder.andWhere(':maxPrice >= car.price', {
                    maxPrice: pageOptionsDto.maxPrice,
                });
            }
            if (pageOptionsDto.minPrice) {
                queryBuilder.andWhere(':minPrice <= car.price', {
                    maxPrice: pageOptionsDto.minPrice,
                });
            }
            queryBuilder
                .orderBy('car.createdAt', pageOptionsDto.order)
                .skip(pageOptionsDto.skip)
                .take(pageOptionsDto.take);
            const itemCount = await queryBuilder.getCount();
            const { entities } = await queryBuilder.getRawAndEntities();
            const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
            return new page_dto_1.PageDto(entities, pageMetaDto);
        };
        this.getCarById = async (id, options = {}) => {
            const car = this.carRepository.findOne({
                where: {
                    id,
                },
                relations: options,
            });
            return car;
        };
        this.createCar = async (createCarDto) => {
            const { name, category, price, image } = createCarDto;
            const car = createCarDto;
            car.name = name;
            car.category = category;
            car.price = price;
            car.image = image;
            return await this.carRepository.save(car);
        };
        this.updateCar = async (id, updateCarDto) => {
            return await this.carRepository.update(id, updateCarDto);
        };
        this.deleteCar = async (id) => {
            return await this.carRepository.delete(id);
        };
    }
};
CarRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(car_entity_1.CarEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarRepository);
exports.CarRepository = CarRepository;
//# sourceMappingURL=car.repository.js.map