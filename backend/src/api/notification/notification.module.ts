import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsGateway } from '../events/events.gateway';
import { NotificationsEntity } from './entity/notification.entity';
import { NotificationService } from './notification.service';
import { NotificationRepository } from './repository/notification.repository';

@Module({
 imports: [TypeOrmModule.forFeature([NotificationsEntity])],
 providers: [NotificationService, NotificationRepository, EventsGateway],
})
export class NotificationModule {}
