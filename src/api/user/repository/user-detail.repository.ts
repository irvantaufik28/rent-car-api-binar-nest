import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDetailEntity } from '../entity/user-detail.entity';

export class UserDetailRepository extends Repository<UserDetailEntity>{
  constructor(
    @InjectRepository(UserDetailEntity)
    private userDetailRepository: Repository<UserDetailEntity>,
  ) {
    super(
      userDetailRepository.target,
      userDetailRepository.manager,
      userDetailRepository.queryRunner,
    )
  }

  async createDetailUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const { user_id, first_name, last_name, phone_number, address } = createUserDto;
    const user_detail = createUserDto;

  
    user_detail.first_name = first_name;
    user_detail.last_name = last_name;
    user_detail.phone_number = phone_number;
    user_detail.address = address;
    user_detail.user_id = user_id

    return await this.userDetailRepository.save(user_detail);
  }
}
