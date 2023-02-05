import { TopMusicModel } from './dbModel';

export default class TopMusicService {
  constructor() {}

  static read(title: string, page: number, limit: number) {
    return TopMusicModel.find({ title: new RegExp(title, 'i') })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  static readCount(title: string) {
    return TopMusicModel.countDocuments({ title: new RegExp(title, 'i') });
  }
}
