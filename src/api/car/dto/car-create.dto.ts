import { IsIn, IsNotEmpty } from 'class-validator';
import { Timestamp } from 'typeorm';

export class CreateCarDto {
  id: number;

  @IsNotEmpty({ message: 'Category cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'Category cannot be empty' })
  @IsIn(['small', 'medium', 'large'], {
    message: 'Category must be small, medium, or large',
  })
  category: string;

  @IsNotEmpty({ message: 'Price cannot be empty' })
  price: number;

  @IsNotEmpty()
  image: string;
  
}
