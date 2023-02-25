import * as dotenv from 'dotenv';
import { CarEntity } from 'src/api/car/entity/car.entity';
import { OrderEntity } from 'src/api/order/entity/order.entity';
import { UserDetailEntity } from 'src/api/user/entity/user-detail.entity';
import { UserEntity } from 'src/api/user/entity/user.entity';
import { DataSource, DataSourceOptions } from "typeorm";
dotenv.config();


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
      host:
        process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      // entities: ['dist/**/*.entity.{ts,js}'], // linux config entities
      entities: [UserEntity, UserDetailEntity, CarEntity, OrderEntity], //  window config entities
      migrations: ['dist/migrations/*.js'],
      logging: true,
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource;