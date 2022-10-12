import {
  Controller,
  Get,
  Post,
  Req,
  Redirect,
  Body,
  Delete,
  Param,
  Put,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  //   this.usersService.create(createUserDto);
  //   return 'Great! Your Requested Record has just been created.';
  // }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findone(@Req() req: Request): string {
    return `This user have #${req.params.id}`;
  }
  @Delete(':id')
  remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ) {
    return `The requested user has been deleted which has id of #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `The requested user has been updated which has id of #${id}`;
  }
}
