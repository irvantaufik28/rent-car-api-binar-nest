import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './entity/car.entity';
import { CarRepository } from './repository/car.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])], 
  providers: [CarService, CarRepository],
  controllers: [CarController],
  exports: [CarRepository]
})
export class CarModule {}
