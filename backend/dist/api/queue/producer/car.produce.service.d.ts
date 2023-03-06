import { Queue } from 'bull';
import { CarService } from 'src/api/car/car.service';
export declare class CarProducerService {
    private queue;
    private readonly carService;
    constructor(queue: Queue, carService: CarService);
    getById(id: number): Promise<any>;
}
