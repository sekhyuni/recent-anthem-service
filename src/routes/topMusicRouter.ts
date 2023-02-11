import { Request, Response } from 'express';

import { format } from 'date-fns';

import TopMusicController from '../controller/topMusicController';

const TopMusicRouter = {
  async read(req: Request, res: Response) {
    const { filter, keyword, page, limit } = req.query;
    const currentTime = new Date().getTime();

    const fetchListOfTopMusic = (time: string) => {
      return Promise.all([
        TopMusicController.read(
          String(filter),
          String(keyword),
          Number(page),
          Number(limit),
          time
        ),
        TopMusicController.readCount(String(filter), String(keyword), time),
      ]);
    };

    try {
      let [listOfTopMusic, count] = await fetchListOfTopMusic(
        format(currentTime, 'yyyyMMddHH')
      );

      let hourIdx = 0;
      while (count === 0 && hourIdx < 10) {
        hourIdx++;

        [listOfTopMusic, count] = await fetchListOfTopMusic(
          format(currentTime - hourIdx * 60 * 60 * 1000, 'yyyyMMddHH')
        );
      }

      if (count === 0) {
        res.status(500).json({
          meta: { count, message: '실시간 데이터가 존재하지 않습니다.' },
          data: [],
        });
        return;
      }

      res
        .status(200)
        .json({ meta: { count, message: 'success' }, data: listOfTopMusic });
    } catch (error: unknown) {
      res.status(500).json({ meta: { count: 0, message: error }, data: [] });
    }
  },
};

export default TopMusicRouter;
