import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from '../car/entity/car.entity';
import { CarRepository } from '../car/repository/car.repository';
import { OrderEntity } from './entity/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from './repository/order.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, CarEntity])],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, CarRepository]
})
export class OrderModule {}
