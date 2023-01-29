import { Request, Response } from 'express';
import { UpdateWriteOpResult } from 'mongoose';
import { IMusic, MusicModel } from '../services/dbModel';
import MusicController from '../controller/musicController';

const MusicRouter = {
  create(req: Request, res: Response) {
    const { title, artist, album } = req.body;
    const newMusic = new MusicModel({ title, artist, album });
    MusicController.createMusic(newMusic)
      .then(() => {
        res.status(200).json({ data: 'success' });
      })
      .catch((err) => {
        if (err.code === 11000) {
          console.log(err);
          res.status(500).json({ errmsg: err });

          // res.status(500).json({
          //   data: {
          //     isDuplicated: true,
          //     errmsg: '이미 존재하는 곡입니다.',
          //   },
          // });
        } else {
          res.status(500).json({ errmsg: err });
        }
      });
  },
  read(req: Request, res: Response) {
    const { query } = req;
    MusicController.readMusic(query.title as string)
      .then((music) => {
        res.status(200).json({ data: music });
      })
      .catch((err) => {
        res.status(500).json({ errmsg: err.errmsg });
      });
  },
  // update(req: Request, res: Response) {
  //   const { title } = req.params;
  //   const music = req.body;
  //   MusicController.updateMusic(title, music)
  //     .then((music: UpdateWriteOpResult) => {
  //       res.status(200).json({ data: music });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ errmsg: err.errmsg });
  //     });
  // },
  // delete(req: Request, res: Response) {
  //   const { title } = req.params;
  //   MusicController.deleteMusic(title)
  //     .then((music: IMusic) => {
  //       res.status(200).json({ data: music });
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ errmsg: err.errmsg });
  //     });
  // },
};

export default MusicRouter;
