import { IUser, UserModel } from './dbModel';

export default class UserService {
  constructor() {}

  static create(user: IUser) {
    return new UserModel(user).save();
  }

  static read(userId: string) {
    return UserModel.findOne({ userId });
  }

  static update(userId: string, user: IUser) {
    return UserModel.updateOne({ userId }, { password: user.password });
  }

  static delete(userId: string) {
    return UserModel.remove({ userId });
  }
}
