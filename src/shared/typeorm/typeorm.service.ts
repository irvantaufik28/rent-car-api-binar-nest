import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host:
        process.env.DATABASE_HOST || this.config.get<string>('DATABASE_HOST'),
      port: process.env.DATABASE_PORT
        ? Number(process.env.DATABASE_PORT)
        : this.config.get<number>('DATABASE_PORT'),
      database:
        process.env.DATABASE_NAME || this.config.get<string>('DATABASE_NAME'),
      username:
        process.env.DATABASE_USER || this.config.get<string>('DATABASE_USER'),
      password:
        process.env.DATABASE_PASSWORD ||
        this.config.get<string>('DATABASE_PASSWORD'),
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logging: true,
      synchronize: false, // never use TRUE in production!
    };
  }
}
