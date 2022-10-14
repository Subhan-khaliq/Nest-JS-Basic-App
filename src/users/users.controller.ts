import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
  ParseIntPipe,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    user.password = await bcrypt.hash(user.password, saltOrRounds);
    return this.usersService.createUser(user);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findone(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
  @Delete(':id')
  remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.usersService.deleteUser(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: CreateUserDto) {
    return this.usersService.updateUser(id, user);
  }
}
