import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'yonathan',
    },
    {
      id: 2,
      name: 'julieta',
    },
  ];

  getUsers(){
    return this.users
  }
}
