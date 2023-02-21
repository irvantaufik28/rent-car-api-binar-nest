import { IsEmail, IsNotEmpty, maxLength, minLength, MinLength } from "class-validator";

export class CreateUserDto {  

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string

    @IsNotEmpty()
    @MinLength(6)
    confirm_password: string

    @IsNotEmpty()
    first_name: string

    @IsNotEmpty()
    last_name: string

    @IsNotEmpty()
    phone_number: string

    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    user_id: number
}