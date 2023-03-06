import { Injectable } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationRepository } from './repository/notification.repository';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
    private readonly eventGateway: EventsGateway,
  ) {}

  async createNotif(
    createNotificationDto: CreateNotificationDto,
  ): Promise<any> {
    const notif = await this.notificationRepository.createNotication(
      createNotificationDto,
    );
    this.eventGateway.sendMessage(notif)
    return notif;
  }
}
