import { Request, Response } from 'express';
import { UpdateWriteOpResult } from 'mongoose';
import { IUser, UserModel } from '../services/dbModel';
import UserController from '../controller/userController';

const UserRouter = {
  create(req: Request, res: Response) {
    const { userId, password } = req.body;
    const newUser = new UserModel({ userId, password });
    UserController.createUser(newUser)
      .then(() => {
        res.status(200).json({ result: 'success' });
      })
      .catch((err) => {
        if (err.code === 11000 && err.keyValue.hasOwnProperty('userId')) {
          res.status(500).json({
            result: {
              isDuplicated: true,
              errmsg: '이미 존재하는 아이디입니다.',
            },
          });
        } else {
          res.status(500).json({ errmsg: err });
        }
      });
  },
  read(req: Request, res: Response) {
    const { userId } = req.params;
    UserController.readUser(userId)
      .then((user) => {
        console.log(typeof user);
        res.status(200).json({ result: user });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ errmsg: err.errmsg });
      });
  },
  update(req: Request, res: Response) {
    const { userId } = req.params;
    const user = req.body;
    UserController.updateUser(userId, user)
      .then((user: UpdateWriteOpResult) => {
        res.status(200).json({ result: user });
      })
      .catch((err) => {
        res.status(500).json({ errmsg: err.errmsg });
      });
  },
  delete(req: Request, res: Response) {
    const { userId } = req.params;
    UserController.deleteUser(userId)
      .then((user: IUser) => {
        res.status(200).json({ result: user });
      })
      .catch((err) => {
        res.status(500).json({ errmsg: err.errmsg });
      });
  },
};

export default UserRouter;
