import { UsersService } from '@/users/users.service';
import { Controller, Get } from '@nestjs/common';

@Controller({})
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getAllUsers() {
    return this.usersService.getUsers();
  }
}
