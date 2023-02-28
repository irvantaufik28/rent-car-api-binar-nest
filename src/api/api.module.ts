import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './car/car.module';
import { QueueModule } from './queue/queue.module';
import { OrderModule } from './order/order.module';
import { EventsModule } from './events/events.module';
import { NotificationModule } from './notification/notification.module';
import { UploadModule } from './upload/upload.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    CarModule,
    QueueModule,
    OrderModule,
    EventsModule,
    NotificationModule,
    UploadModule,
  ],
  providers: [],
})
export class ApiModule {}
