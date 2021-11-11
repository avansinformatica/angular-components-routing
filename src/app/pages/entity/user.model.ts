export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  emailAdress: string = '';
  role: UserRole = UserRole.guest;

  constructor(firstName = '', lastName = '', emailAdress = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAdress = emailAdress;
  }
}
