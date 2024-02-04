import { MinLength, MaxLength, IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class RegisterBody {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @IsNotEmpty()
  password: string;
}
