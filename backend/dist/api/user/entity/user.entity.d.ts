import { SecurityType } from 'src/common/enum/enum';
import { UserDetailEntity } from './user-detail.entity';
import { OrderEntity } from 'src/api/order/entity/order.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    role_name: SecurityType.CUSTOMER;
    user_detail: UserDetailEntity;
    order: OrderEntity[];
}
