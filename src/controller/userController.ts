import { IUser } from '../services/dbModel';
import UserService from '../services/userService';

export default class UserController {
  constructor() {}

  static create(user: IUser) {
    return UserService.create(user);
  }

  static read(userId: string) {
    return UserService.read(userId);
  }

  static update(userId: string, user: IUser) {
    return UserService.update(userId, user);
  }

  static delete(userId: string) {
    return UserService.delete(userId);
  }
}
