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
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return `The record have been created`;
  }

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action will show all the users';
  }

  @Get(':id')
  findone(@Req() req: Request): string {
    return `This user have #${req.params.id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `The requested user has been deleted which has id of #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `The requested user has been updated which has id of #${id}`;
  }
}
