import { Body, JsonController, Post } from 'routing-controllers';
import { RegisterBody } from './requests/auth/RegisterBody';

@JsonController('/auth')
export class AuthController {
  @Post('/register')
  register(@Body() body: RegisterBody) {
    console.log(body);
    return '';
  }
}
