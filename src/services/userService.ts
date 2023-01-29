import { IUser, UserModel } from './dbModel';

export default class UserService {
  constructor() {}

  static createUser(user: IUser) {
    return new UserModel(user).save();
  }

  static readUser(userId: string) {
    return UserModel.findOne({ userId });
  }

  static updateUser(userId: string, user: IUser) {
    return UserModel.updateOne({ userId }, { password: user.password });
  }

  static deleteUser(userId: string) {
    return UserModel.remove({ userId });
  }
}
