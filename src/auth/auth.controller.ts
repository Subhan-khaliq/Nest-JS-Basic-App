import { Controller, Request, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() user: CreateUserDto) {
    console.log(user, 'I am in the route');
    return this.authService.login(user);
  }
}
