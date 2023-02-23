import { Injectable } from '@nestjs/common';
import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { CreateCarDto } from './dto/car-create.dto';
import { CarRepository } from './repository/car.repository';

@Injectable()
export class CarService {
    constructor(
        private readonly carRepository: CarRepository,
    ){}

    async createCar(createCarDto: CreateCarDto): Promise<CreateCarDto> {
        return await this.carRepository.createCar(createCarDto)
    }

    async getAllCarPage(pageOptionsDto: PageOptionsDto): Promise <PageDto<CreateCarDto>> {
        const result = this.carRepository.getAllCarPagination(pageOptionsDto)

        return result
    }
}
