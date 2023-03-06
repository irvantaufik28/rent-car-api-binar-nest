import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { Repository } from 'typeorm';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderEntity } from '../entity/order.entity';
export declare class OrderRepository extends Repository<OrderEntity> {
    private orderRepository;
    constructor(orderRepository: Repository<OrderEntity>);
    getAllOrderPagination: (pageOptionsDto: PageOptionsDto) => Promise<PageDto<CreateOrderDto>>;
    createOrder: (createOrderDto: CreateOrderDto) => Promise<CreateOrderDto>;
    orderReport: (params: {
        from: string;
        until: string;
    }) => Promise<any>;
}
