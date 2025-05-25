import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './shared/user.dto';
import { User } from './shared/user.schema';

@Controller()
export class AppController {
  constructor() {}

}
