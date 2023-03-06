import { EventsGateway } from '../events/events.gateway';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationRepository } from './repository/notification.repository';
export declare class NotificationService {
    private readonly notificationRepository;
    private readonly eventGateway;
    constructor(notificationRepository: NotificationRepository, eventGateway: EventsGateway);
    createNotif(createNotificationDto: CreateNotificationDto): Promise<any>;
}
