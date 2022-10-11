import { Controller, Get, Post, Req, Redirect, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Post()
  create(): string {
    return 'The record have been created.';
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
