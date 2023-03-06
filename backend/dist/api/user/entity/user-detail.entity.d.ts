import { BaseEntity } from 'typeorm';
export declare class UserDetailEntity extends BaseEntity {
    id: number;
    user_id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    address: string;
    user_detail: UserDetailEntity;
}
