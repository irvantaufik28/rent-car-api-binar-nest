import { BaseEntity } from 'typeorm';
export declare class NotificationsEntity extends BaseEntity {
    id: number;
    recipient_id: number;
    sender_id: number;
    content: string;
}
