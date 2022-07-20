import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get('admin/all')
  AllUsersInformation() {
    return this.UserService.AllUsersInformation();
  }

  @Put(':id')
  updateUser(@Param('id') id: string) {
    return this.UserService.updateUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.UserService.deleteUser(id);
  }

  @Get(':id')
  UserInformation(@Param('id') id: string) {
    return this.UserService.UserInformation(id);
  }
}
