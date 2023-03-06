import { Queue } from 'bull';
import { CreateOrderDto } from 'src/api/order/dto/create-order.dto';
export declare class OrderProducerService {
    private queue;
    constructor(queue: Queue);
    createOrder(createOrderDto: CreateOrderDto, user_id: number): Promise<import("bull").JobId>;
}
