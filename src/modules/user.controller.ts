
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../shared/user.dto';
import { User } from '../shared/user.schema';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  postUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.postUser(createUserDto)
  }
}
