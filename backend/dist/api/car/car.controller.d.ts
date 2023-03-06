/// <reference types="multer" />
import { PageCarOptionsDto } from 'src/common/pageDTO/page-car-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { CarProducerService } from '../queue/producer/car.produce.service';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/car-create.dto';
export declare class CarController {
    private readonly carService;
    private readonly carProducerService;
    constructor(carService: CarService, carProducerService: CarProducerService);
    createCar(payload: CreateCarDto, file: Express.Multer.File): Promise<CreateCarDto>;
    getCarPagination(pageOptionDto: PageCarOptionsDto): Promise<PageDto<CreateCarDto>>;
    getCarById(id: number): Promise<any>;
    updateCar(id: number, payload: CreateCarDto): Promise<void>;
    deleteCar(id: number): Promise<any>;
}
