import { CarEntity } from 'src/api/car/entity/car.entity';
import { UserEntity } from 'src/api/user/entity/user.entity';
import { BaseEntity } from 'typeorm';
export declare class OrderEntity extends BaseEntity {
    id: number;
    total_price: number;
    start_rent_at: Date;
    finish_rent_at: Date;
    status: Boolean;
    slip: string;
    UserId: number;
    CarId: number;
    createdAt: Date;
    updateAt: Date;
    user: UserEntity;
    car: CarEntity;
}
