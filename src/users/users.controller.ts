import { UsersService } from '@/users/users.service';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller({})
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getAllUsers(@Req() req: Request, @Res() res: Response) {
    return this.usersService.getUsers();
  }
}
