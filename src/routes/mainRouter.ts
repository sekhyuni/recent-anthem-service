import { Request, Response } from 'express';

export default function MainRouter(req: Request, res: Response) {
  res.status(200).json({ data: 'success' });
}
