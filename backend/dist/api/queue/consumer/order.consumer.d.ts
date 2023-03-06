import { Job } from 'bull';
import { CreateOrderDto } from 'src/api/order/dto/create-order.dto';
import { OrderService } from 'src/api/order/order.service';
export declare class OrderCounsumer {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(job: Job<{
        data: CreateOrderDto;
        user_id: number;
    }>): Promise<void>;
}
