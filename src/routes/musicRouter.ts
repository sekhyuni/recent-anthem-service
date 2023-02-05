import { Request, Response } from 'express';
import { UpdateWriteOpResult } from 'mongoose';
import { IMusic, MusicModel } from '../services/dbModel';
import MusicController from '../controller/musicController';

const MusicRouter = {
  async create(req: Request, res: Response) {
    const { title, artist, album } = req.body;
    const newMusic = new MusicModel({ title, artist, album });

    try {
      const response = await MusicController.create(newMusic);
      res.status(200).json({
        meta: {
          message: `A Music Of Title ${response.title} is inserted successfully`,
        },
      });
    } catch (error: unknown) {
      const err = error as { code: number; message: string };
      if (err.code === 11000) {
        res.status(500).json({ meta: { message: err.message } });

        // res.status(500).json({
        //   data: {
        //     isDuplicated: true,
        //     errmsg: '이미 존재하는 곡입니다.',
        //   },
        // });
      } else {
        res.status(500).json({ meta: { message: err.message } });
      }
    }
  },
  async read(req: Request, res: Response) {
    const { title, page, limit } = req.query;

    try {
      const musics = await MusicController.read(
        String(title),
        Number(page),
        Number(limit)
      );
      const count = await MusicController.readCount(String(title));

      res
        .status(200)
        .json({ meta: { count, message: 'success' }, data: musics });
    } catch (error: unknown) {
      res.status(500).json({ meta: { message: error } });
    }
  },
  // update(req: Request, res: Response) {
  //   const { title } = req.params;
  //   const music = req.body;
  //   MusicController.update(title, music)
  //     .then((music: UpdateWriteOpResult) => {
  //       res.status(200).json({ data: music });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ errmsg: err.errmsg });
  //     });
  // },
  // delete(req: Request, res: Response) {
  //   const { title } = req.params;
  //   MusicController.delete(title)
  //     .then((music: IMusic) => {
  //       res.status(200).json({ data: music });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ errmsg: err.errmsg });
  //     });
  // },
};

export default MusicRouter;
