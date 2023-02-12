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
      res.status(500).json({ meta: { message: err.message } });
    }
  },
  async read(req: Request, res: Response) {
    const { filter, keyword, page, limit } = req.query;

    try {
      const [listOfMusic, count] = await Promise.all([
        MusicController.read(
          filter as string,
          keyword as string,
          Number(page),
          Number(limit)
        ),
        MusicController.readCount(filter as string, keyword as string),
      ]);

      res
        .status(200)
        .json({ meta: { count, message: 'success' }, data: listOfMusic });
    } catch (error: unknown) {
      res.status(500).json({ meta: { count: 0, message: error }, data: [] });
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
