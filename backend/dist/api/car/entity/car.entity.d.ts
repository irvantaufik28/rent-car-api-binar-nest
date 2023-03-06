import { OrderEntity } from 'src/api/order/entity/order.entity';
import { BaseEntity } from 'typeorm';
export declare class CarEntity extends BaseEntity {
    id: number;
    name: string;
    category: string;
    price: number;
    status: boolean;
    start_rent_at: Date;
    finish_rent_at: Date;
    image: string;
    createdAt: Date;
    updateAt: Date;
    order: OrderEntity[];
}
