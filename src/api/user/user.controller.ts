import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUSerDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser (@Body() payload: CreateUSerDto): Promise<any> {
        const user = await this.userService.createUser(payload)
       return user;
    }
}
