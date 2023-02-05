import { Request, Response } from 'express';
import { UpdateWriteOpResult } from 'mongoose';
import { IUser, UserModel } from '../services/dbModel';
import UserController from '../controller/userController';

const UserRouter = {
  create(req: Request, res: Response) {
    const { userId, password } = req.body;
    const newUser = new UserModel({ userId, password });
    UserController.create(newUser)
      .then(() => {
        res.status(200).json({ data: 'success' });
      })
      .catch((err) => {
        if (err.code === 11000 && err.keyValue.hasOwnProperty('userId')) {
          res.status(500).json({
            data: {
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
    UserController.read(userId)
      .then((user) => {
        res.status(200).json({ data: user });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ errmsg: err.errmsg });
      });
  },
  update(req: Request, res: Response) {
    const { userId } = req.params;
    const user = req.body;
    UserController.update(userId, user)
      .then((user: UpdateWriteOpResult) => {
        res.status(200).json({ data: user });
      })
      .catch((err) => {
        res.status(500).json({ errmsg: err.errmsg });
      });
  },
  delete(req: Request, res: Response) {
    const { userId } = req.params;
    UserController.delete(userId)
      .then((user: IUser) => {
        res.status(200).json({ data: user });
      })
      .catch((err) => {
        res.status(500).json({ errmsg: err.errmsg });
      });
  },
};

export default UserRouter;
