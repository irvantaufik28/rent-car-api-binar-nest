import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './entity/car.entity';
import { CarRepository } from './repository/car.repository';
import { CarProducerService } from '../queue/producer/car.produce.service';
import { BullModule } from '@nestjs/bull';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CloudinaryProvider } from '../cloudinary/cloudinary.provider';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity]),
  BullModule.forRoot({
    redis: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
    },
  }),
  BullModule.registerQueue({
    name: 'car-queue',
  }),
], 
  providers: [CarService, CarRepository, CarProducerService, CloudinaryService, CloudinaryProvider],
  controllers: [CarController],
  exports: [CarRepository, CarService]
})
export class CarModule {}
