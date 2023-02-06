import { TopMusicModel } from './dbModel';

export default class TopMusicService {
  constructor() {}

  static read(
    filter: string,
    keyword: string,
    page: number,
    limit: number,
    time: string
  ) {
    return TopMusicModel.find({
      $and: [{ [filter]: new RegExp(keyword, 'i') }, { crawling_time: time }],
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  static readCount(filter: string, keyword: string, time: string) {
    return TopMusicModel.countDocuments({
      $and: [{ [filter]: new RegExp(keyword, 'i') }, { crawling_time: time }],
    });
  }
}
