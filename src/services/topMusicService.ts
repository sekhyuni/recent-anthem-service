import { TopMusicModel } from './dbModel';

export default class TopMusicService {
  constructor() {}

  static read(filter: string, keyword: string, page: number, limit: number) {
    return TopMusicModel.find({ [filter]: new RegExp(keyword, 'i') })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  static readCount(filter: string, keyword: string) {
    return TopMusicModel.countDocuments({ [filter]: new RegExp(keyword, 'i') });
  }
}
