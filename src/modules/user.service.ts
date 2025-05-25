import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../shared/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../shared/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async postUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save()
  }


}
