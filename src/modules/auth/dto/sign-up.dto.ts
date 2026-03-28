import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class SignUpDto {

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    username: string
}
