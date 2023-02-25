import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvPath } from './common/helper/env.helper';
import { dataSourceOptions } from '../db/config';
// import { TypeOrmConfigService } from './shared/typeorm/typeorm.service.ts.example';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    ApiModule,
  ],
})
export class AppModule {}
