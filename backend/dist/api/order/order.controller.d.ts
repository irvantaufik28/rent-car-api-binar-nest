import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { OrderProducerService } from '../queue/producer/order.produce.service';
import { UserEntity } from '../user/entity/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    private readonly orderProduceService;
    constructor(orderService: OrderService, orderProduceService: OrderProducerService);
    gerOrderPagination(pageOptionsDto: PageOptionsDto): Promise<PageDto<CreateOrderDto>>;
    createOrderService(payload: CreateOrderDto, request: UserEntity): Promise<any>;
    getOrderReport(from: string, until: string): Promise<any>;
}
