import { IsNotEmpty, IsString } from 'class-validator';

export class CofirmEmailBody {
  @IsNotEmpty()
  @IsString()
  token: string;
}
