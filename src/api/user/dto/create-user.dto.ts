import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUSerDto {  

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string

    @IsNotEmpty()
    @MinLength(6)
    confirm_password: string
}