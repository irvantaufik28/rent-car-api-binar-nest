import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateOrderDto } from 'src/api/order/dto/create-order.dto';
import { OrderService } from 'src/api/order/order.service';

@Injectable()
export class OrderProducerService {
  constructor(
    @InjectQueue('order-queue') private queue: Queue,
    private readonly orderService: OrderService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto, user_id:number) {
    const order = await this.orderService.createOrder(createOrderDto, user_id);
    console.log(order)
    const result = await this.queue.add('createOrder-job', {
      data: order,
    });
    console.log(result.data)
    return result.data;
  }
}
