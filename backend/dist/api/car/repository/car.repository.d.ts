import { PageCarOptionsDto } from 'src/common/pageDTO/page-car-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { Repository } from 'typeorm';
import { CreateCarDto } from '../dto/car-create.dto';
import { CarEntity } from '../entity/car.entity';
export declare class CarRepository extends Repository<CarEntity> {
    private carRepository;
    constructor(carRepository: Repository<CarEntity>);
    getAllCarPagination: (pageOptionsDto: PageCarOptionsDto) => Promise<PageDto<CreateCarDto>>;
    getCarById: (id: number, options?: object) => Promise<CarEntity>;
    createCar: (createCarDto: CreateCarDto) => Promise<CreateCarDto>;
    updateCar: (id: number, updateCarDto: CreateCarDto) => Promise<any>;
    deleteCar: (id: number) => Promise<any>;
}
