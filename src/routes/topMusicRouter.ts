import { Request, Response } from 'express';
import TopMusicController from '../controller/topMusicController';

const TopMusicRouter = {
  async read(req: Request, res: Response) {
    const { title, page, limit } = req.query;

    try {
      const musics = await TopMusicController.read(
        String(title),
        Number(page),
        Number(limit)
      );
      const count = await TopMusicController.readCount(String(title));

      res
        .status(200)
        .json({ meta: { count, message: 'success' }, data: musics });
    } catch (error: unknown) {
      res.status(500).json({ meta: { message: error } });
    }
  },
};

export default TopMusicRouter;
