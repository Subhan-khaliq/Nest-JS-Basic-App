import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(user: CreateUserDto): Promise<User> {
    const vldUser = await this.authService.validateUser(
      user.username,
      user.password,
    );
    if (!vldUser) {
      throw new UnauthorizedException();
    }
    return vldUser;
  }
}
