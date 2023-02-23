import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { UpdateResult } from 'typeorm';
import { CreateCarDto } from './dto/car-create.dto';
import { CarEntity } from './entity/car.entity';
import { CarRepository } from './repository/car.repository';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async createCar(createCarDto: CreateCarDto): Promise<CreateCarDto> {
    return await this.carRepository.createCar(createCarDto);
  }

  async getAllCarPage(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<CreateCarDto>> {
    const result = this.carRepository.getAllCarPagination(pageOptionsDto);

    return result;
  }

  getCarById = async (id: number): Promise<CarEntity> => {
    const car = await this.carRepository.getCarById(id);
    console.log(car);
    if (!car) {
      throw new HttpException('car not found', HttpStatus.NOT_FOUND);
    }
    return car;
  };

  updateCar = async (id: number, updateCarDto: CreateCarDto): Promise<void> => {
    const car = await this.carRepository.getCarById(id);
    if (!car) {
      throw new HttpException('car not found', HttpStatus.NOT_FOUND);
    }
    return await this.carRepository.updateCar(id, updateCarDto);
  };

  deleteCar = async (id: number): Promise<any> => {
    const car = await this.carRepository.getCarById(id);
    if (!car) {
      throw new HttpException('car not found', HttpStatus.NOT_FOUND);
    }
    return await this.carRepository.delete(id);
  };
}
