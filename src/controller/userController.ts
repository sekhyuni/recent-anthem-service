import { IUser } from '../services/dbModel';
import UserService from '../services/userService';

export default class UserController {
  constructor() {}

  static createUser(user: IUser) {
    return UserService.createUser(user);
  }

  static readUser(userId: string) {
    return UserService.readUser(userId);
  }

  static updateUser(userId: string, user: IUser) {
    return UserService.updateUser(userId, user);
  }

  static deleteUser(userId: string) {
    return UserService.deleteUser(userId);
  }
}
