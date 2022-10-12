import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './interfaces/user.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  // private readonly users: User[] = [];

  // create(user: User) {
  //   this.users.push(user);
  // }

  // findAll(): User[] {
  //   return this.users;
  // }

}
