import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Roles } from 'src/common/decorator/roles.decorator';
import { SecurityType } from 'src/common/enum/enum';
import { RolesGuard } from 'src/common/guard/jwt-role.guard';
import { JwGuard } from 'src/common/guard/jwt.guard';
import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { CarProducerService } from '../queue/producer/car.produce.service';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/car-create.dto';

@Controller('car')
@UseInterceptors(
  ClassSerializerInterceptor)
export class CarController {
  constructor(
    private readonly carService: CarService,
    private readonly carProducerService: CarProducerService,
  ) {}
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];
          const fileExtension = file.originalname.split('.')[1];
          const newFileName =
            name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;
  
          cb(null, newFileName);
        }
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(null, false);
        }
        cb(null, true);
      },
    })
  )
  // @Roles(SecurityType.STAF)
  // @UseGuards(JwGuard, RolesGuard)
  async createCar(
    @Body() payload: CreateCarDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CreateCarDto> {
    const car = await this.carService.createCar(payload, file);
    return car;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getCarPagination(
    @Query() pageOptionDto: PageOptionsDto,
  ): Promise<PageDto<CreateCarDto>> {
    return await this.carService.getAllCarPage(pageOptionDto);
  }

  @Get('/:id')
  async getCarById(@Param('id') id: number): Promise<any> {
    const result = await this.carProducerService.getById(id);
    return result.data;
  }

  @Put('/:id')
  @Roles(SecurityType.STAF)
  @UseGuards(JwGuard, RolesGuard)
  async updateCar(
    @Param('id') id: number,
    @Body() payload: CreateCarDto,
  ): Promise<void> {
    return this.carService.updateCar(id, payload);
  }
  @Delete('/:id')
  @Roles(SecurityType.STAF)
  @UseGuards(JwGuard, RolesGuard)
  async deleteCar(@Param('id') id: number): Promise<any> {
    const result = this.carService.deleteCar(id);
    return result;
  }
}
