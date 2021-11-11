import { Injectable } from '@angular/core';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      firstName: 'User',
      lastName: 'Een',
      emailAdress: 'usereen@host.com',
      role: UserRole.admin,
    },
    {
      id: 1,
      firstName: 'User',
      lastName: 'Twee',
      emailAdress: 'usertwee@host.com',
      role: UserRole.guest,
    },
    {
      id: 2,
      firstName: 'User',
      lastName: 'Drie',
      emailAdress: 'userdrie@host.com',
      role: UserRole.editor,
    },
  ];

  constructor() {}

  getUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.filter((user) => user.id === id)[0];
  }
}
