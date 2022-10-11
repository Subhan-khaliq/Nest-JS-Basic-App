import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!, This is my First Application of Nest Js. And I am new to Nest Js.';
  }
}
