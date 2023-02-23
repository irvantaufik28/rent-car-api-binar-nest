import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CarModule } from './car/car.module';
@Module({
  imports: [UserModule, AuthModule, CarModule],
})
export class ApiModule {}
