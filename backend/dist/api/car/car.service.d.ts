import { PageCarOptionsDto } from 'src/common/pageDTO/page-car-options.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreateCarDto } from './dto/car-create.dto';
import { CarEntity } from './entity/car.entity';
import { CarRepository } from './repository/car.repository';
export declare class CarService {
    private readonly carRepository;
    private readonly cloudinaryService;
    constructor(carRepository: CarRepository, cloudinaryService: CloudinaryService);
    createCar(createCarDto: CreateCarDto, file: any): Promise<CreateCarDto>;
    getAllCarPage(pageOptionsDto: PageCarOptionsDto): Promise<any>;
    getCarById: (id: number) => Promise<CarEntity>;
    updateCar: (id: number, updateCarDto: CreateCarDto) => Promise<void>;
    deleteCar: (id: number) => Promise<any>;
}
