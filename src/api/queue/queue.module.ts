import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { CarCounsumer } from './consumer/car.consumer';
import { CarProducerService } from './producer/car.produce.service';
import { CarRepository } from '../car/repository/car.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from '../car/entity/car.entity';
import { CarService } from '../car/car.service';

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
  exports: [CarCounsumer, CarProducerService],
  providers: [CarCounsumer, CarProducerService, CarService, CarRepository],
  controllers : []
})
export class QueueModule {}
