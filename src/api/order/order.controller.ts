import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { GetUser } from 'src/common/decorator/get-user.decorator';
import { Roles } from 'src/common/decorator/roles.decorator';
import { SecurityType } from 'src/common/enum/enum';
import { RolesGuard } from 'src/common/guard/jwt-role.guard';
import { JwGuard } from 'src/common/guard/jwt.guard';
import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { CreateCarDto } from '../car/dto/car-create.dto';
import { UserEntity } from '../user/entity/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
@UseInterceptors(ClassSerializerInterceptor)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async gerOrderPagination(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<CreateOrderDto>> {
    return this.orderService.getAllOrderPage(pageOptionsDto);
  }

  @Post()
  @Roles(SecurityType.CUSTOMER)
  @UseGuards(JwGuard, RolesGuard)
  async createOrder(
    @Body() payload: CreateOrderDto,
    @GetUser() request: UserEntity,
  ): Promise<CreateOrderDto> {
    const order = await this.orderService.createOrder(payload, request.id);
    return order;
  }
}
