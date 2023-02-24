import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './entity/car.entity';
import { CarRepository } from './repository/car.repository';
import { CarProducerService } from '../queue/producer/car.produce.service';
import { QueueModule } from '../queue/queue.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity]),
  BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }),
  BullModule.registerQueue({
    name: 'car-queue',
  }),
], 
  providers: [CarService, CarRepository, CarProducerService, QueueModule],
  controllers: [CarController],
  exports: [CarRepository, CarService]
})
export class CarModule {}
