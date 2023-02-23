import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, HttpStatus, Post, Query, UseInterceptors } from '@nestjs/common';
import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/car-create.dto';

@Controller('car')
@UseInterceptors(ClassSerializerInterceptor)
export class CarController {
    constructor(private readonly carService: CarService) {}
    @Post()
    async createCar(@Body() payload: CreateCarDto): Promise<CreateCarDto> {
        const car = await this.carService.createCar(payload)
        return car
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getCarPagination(@Query() pageOptionDto : PageOptionsDto): Promise<PageDto<CreateCarDto>> {
        return this.carService.getAllCarPage(pageOptionDto)
    }
}
