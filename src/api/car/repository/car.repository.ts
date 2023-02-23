import { InjectRepository } from '@nestjs/typeorm';
import { PageMetaDto } from 'src/common/pageDTO/page-meta.dto';
import { PageOptionsDto } from 'src/common/pageDTO/page-options.dto';
import { PageDto } from 'src/common/pageDTO/page.dto';
import { Repository } from 'typeorm';
import { CreateCarDto } from '../dto/car-create.dto';
import { CarEntity } from '../entity/car.entity';

export class CarRepository extends Repository<CarEntity> {
  constructor(
    @InjectRepository(CarEntity)
    private carRepository: Repository<CarEntity>,
  ) {
    super(
      carRepository.target,
      carRepository.manager,
      carRepository.queryRunner,
    );
  }

  getAllCarPagination = async (
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<CreateCarDto>> => {
    const queryBuilder = this.carRepository.createQueryBuilder('car');

    queryBuilder
      .orderBy('car.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  };
  
  getCarById = async (id: number, options: object = {}): Promise<CarEntity> => {
    const car = this.carRepository.findOne({
      where: {
        id,
      },
      relations: options,
    });
    return car;
  };

  createCar = async (createCarDto: CreateCarDto): Promise<CreateCarDto> => {
    const { name, category, price, image } = createCarDto;
    const car = createCarDto;

    car.name = name;
    car.category = category;
    car.price = price;
    car.image = image;

    return await this.carRepository.save(car);
  };

  updateCar = async(id: number, updateCarDto :CreateCarDto): Promise<any> =>  {
    return await this.carRepository.update(id, updateCarDto)
    
  }

  deleteCar = async(id:number): Promise<any> => {
    return await this.carRepository.delete(id)
  }
  
}
