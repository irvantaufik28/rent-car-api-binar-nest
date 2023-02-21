import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/common/decorator/get-user.decorator';
import { JwGuard } from 'src/common/guard/jwt.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async createUser(@Body() payload: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.userService.createUser(payload);
    return user;
  }

  @Get('profile/:id')
  @UseGuards(JwGuard)
  async getUserById(
    @Param('id') id: number,
    @GetUser() request: UserEntity,
  ): Promise<UserEntity> {
    const user = await this.userService.getUserById(request.id);
    return user;
  }
}
