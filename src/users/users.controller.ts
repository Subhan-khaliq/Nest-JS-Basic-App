import { Controller, Get, Post, Req, Redirect } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Post()
  create(): string {
    return 'The record have been created.';
  }

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    return 'This action will show all the users';
  }
}
