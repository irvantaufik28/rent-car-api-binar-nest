import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { CarRepository } from '../car/repository/car.repository';
import { NotificationService } from '../notification/notification.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderRepository } from './repository/order.repository';
export declare class OrderService {
    private readonly orderRepository;
    private readonly carRepository;
    private readonly notificationService;
    constructor(orderRepository: OrderRepository, carRepository: CarRepository, notificationService: NotificationService);
    getAllOrderPage(pageOptionsDto: PageOptionsDto): Promise<PageDto<CreateOrderDto>>;
    createOrder(createOrderDto: CreateOrderDto, userId: number): Promise<CreateOrderDto>;
    getOrderReport(params: any): Promise<any>;
}
