import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser (@Body() payload: CreateUserDto): Promise<CreateUserDto> {
        const user = await this.userService.createUser(payload)
       return user;
    }
}
