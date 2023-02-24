import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './car/car.module';
import { QueueModule } from './queue/queue.module';
@Module({
  imports: [UserModule, AuthModule, CarModule, QueueModule],
})
export class ApiModule {}
