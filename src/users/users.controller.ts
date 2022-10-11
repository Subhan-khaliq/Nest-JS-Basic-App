import { Controller, Get, Post, Req, Redirect, Body, Param} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() createUserDto: CreateUserDto){
    return `The record have been created. Details: #${createUserDto.username}`;
  }

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() req: Request): string {
    return 'This action will show all the users';
  }

  @Get(':id')
  findone(@Req() req: Request): string {
    return `This user have #${req.params.id}`;
  }
}
