import { Repository } from 'typeorm';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { NotificationsEntity } from '../entity/notification.entity';
export declare class NotificationRepository extends Repository<NotificationsEntity> {
    private notificationRepository;
    constructor(notificationRepository: Repository<NotificationsEntity>);
    createNotication: (createNotificationDto: CreateNotificationDto) => Promise<any>;
}
