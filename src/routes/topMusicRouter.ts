import { Request, Response } from 'express';

import TopMusicController from '../controller/topMusicController';

const TopMusicRouter = {
  async read(req: Request, res: Response) {
    const { filter, keyword, page, limit, time } = req.query;

    const fetchListOfTopMusic = (time: string) => {
      return Promise.all([
        TopMusicController.read(
          filter as string,
          keyword as string,
          Number(page),
          Number(limit),
          time
        ),
        TopMusicController.readCount(filter as string, keyword as string, time),
      ]);
    };

    try {
      const [listOfTopMusic, count] = await fetchListOfTopMusic(time as string);

      if (count === 0) {
        res.status(500).json({
          meta: { count, message: '데이터가 존재하지 않습니다.' },
          data: [],
        });
        return;
      }

      res.status(200).json({
        meta: {
          count,
          message: 'success',
        },
        data: listOfTopMusic,
      });
    } catch (error: unknown) {
      res.status(500).json({ meta: { count: 0, message: error }, data: [] });
    }
  },
};

export default TopMusicRouter;
