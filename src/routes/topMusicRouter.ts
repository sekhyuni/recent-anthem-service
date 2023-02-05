import { Request, Response } from 'express';
import TopMusicController from '../controller/topMusicController';

const TopMusicRouter = {
  async read(req: Request, res: Response) {
    const { filter, keyword, page, limit } = req.query;

    try {
      const listOfTopMusic = await TopMusicController.read(
        String(filter),
        String(keyword),
        Number(page),
        Number(limit)
      );
      const count = await TopMusicController.readCount(
        String(filter),
        String(keyword)
      );

      res
        .status(200)
        .json({ meta: { count, message: 'success' }, data: listOfTopMusic });
    } catch (error: unknown) {
      res.status(500).json({ meta: { message: error } });
    }
  },
};

export default TopMusicRouter;
