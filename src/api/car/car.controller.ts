import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from 'src/common/decorator/roles.decorator';
import { SecurityType } from 'src/common/enum/enum';
import { RolesGuard } from 'src/common/guard/jwt-role.guard';
import { JwGuard } from 'src/common/guard/jwt.guard';
import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/car-create.dto';
import { CarEntity } from './entity/car.entity';

@Controller('car')
@UseInterceptors(ClassSerializerInterceptor)
export class CarController {
    constructor(private readonly carService: CarService) {}
    @Post()
    @Roles(SecurityType.STAF)
    @UseGuards(JwGuard, RolesGuard)
    async createCar(@Body() payload: CreateCarDto): Promise<CreateCarDto> {
        const car = await this.carService.createCar(payload)
        return car  
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getCarPagination(@Query() pageOptionDto : PageOptionsDto): Promise<PageDto<CreateCarDto>> {
        return this.carService.getAllCarPage(pageOptionDto)
    }

    @Get('/:id')
    async getCarById(@Param('id') id: number): Promise<CarEntity> {
        return await this.carService.getCarById(id)
    }

    @Put('/:id')
    @Roles(SecurityType.STAF)
    @UseGuards(JwGuard, RolesGuard)
    async updateCar(@Param('id') id:number, @Body() payload: CreateCarDto): Promise<void> {
        return this.carService.updateCar(id, payload)
    }
    @Delete('/:id')
    @Roles(SecurityType.STAF)
    @UseGuards(JwGuard, RolesGuard)
    async deleteCar(@Param('id') id: number): Promise<void> {
        return this.carService.deleteCar(id)
    }
}
