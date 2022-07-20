import {
  ClassSerializerInterceptor,
  HttpException,
  HttpStatus,
  Injectable,
  UseInterceptors,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserSerialized } from './users.type';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  @UseInterceptors(ClassSerializerInterceptor)
  async AllUsersInformation() {
    try {
      const users = await this.UserModel.find();
      const compiledUsers = users.map((user) => new UserSerialized(user));
      return compiledUsers;
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  async updateUser(id: string) {
    try {
      const user = await this.UserModel.findByIdAndUpdate(id);
      return new UserSerialized(user);
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  async deleteUser(id: string) {
    try {
      const user = await this.UserModel.findByIdAndDelete(id);
      return `delete user ${id}`;
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  async UserInformation(id: string) {
    try {
      const user = await this.UserModel.findOne({ id });
      return new UserSerialized(user);
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }
}
