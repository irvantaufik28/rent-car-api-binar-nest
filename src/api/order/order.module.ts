import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from '../car/entity/car.entity';
import { CarRepository } from '../car/repository/car.repository';
import { OrderProducerService } from '../queue/producer/order.produce.service';
import { QueueModule } from '../queue/queue.module';
import { OrderEntity } from './entity/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from './repository/order.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, CarEntity]),
  BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }),
  BullModule.registerQueue(  {
    name: 'car-queue',
  },
    {
      name: 'order-queue',
    }),

],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, CarRepository, OrderProducerService, QueueModule]
})
export class OrderModule {}
