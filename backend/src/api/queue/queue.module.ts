import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { CarCounsumer } from './consumer/car.consumer';
import { CarProducerService } from './producer/car.produce.service';
import { CarRepository } from '../car/repository/car.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from '../car/entity/car.entity';
import { CarService } from '../car/car.service';
import { OrderService } from '../order/order.service';
import { OrderRepository } from '../order/repository/order.repository';
import { OrderEntity } from '../order/entity/order.entity';
import { NotificationService } from '../notification/notification.service';
import { NotificationsEntity } from '../notification/entity/notification.entity';
import { NotificationRepository } from '../notification/repository/notification.repository';
import { EventsGateway } from '../events/events.gateway';
import { OrderCounsumer } from './consumer/order.consumer';
import { OrderProducerService } from './producer/order.produce.service';
import { CloudinaryProvider } from '../cloudinary/cloudinary.provider';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarEntity, OrderEntity, NotificationsEntity]),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue(
      {
        name: 'car-queue',
      },
      {
        name: 'order-queue',
      },
    ),
  ],
  exports: [CarCounsumer, CarProducerService],
  providers: [
    OrderCounsumer, OrderProducerService,
    CarCounsumer,
    CarProducerService,
    CarService,
    CarRepository,
    OrderService,
    OrderRepository,
    NotificationService,
    NotificationRepository,
    EventsGateway,
    CloudinaryProvider,
    CloudinaryService
  ],
  controllers: [],
})
export class QueueModule {}
