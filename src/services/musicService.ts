import { IMusic, MusicModel } from './dbModel';

export default class MusicService {
  constructor() {}

  static create(music: IMusic) {
    return new MusicModel(music).save();
  }

  static read(filter: string, keyword: string, page: number, limit: number) {
    return MusicModel.find({ [filter]: new RegExp(keyword, 'i') })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  static readCount(filter: string, keyword: string) {
    return MusicModel.countDocuments({ [filter]: new RegExp(keyword, 'i') });
  }

  // static update(title: string, music: IMusic) {
  //   return MusicModel.updateOne({ title }, { artist: music.artist });
  // }

  // static delete(title: string) {
  //   return MusicModel.remove({ title });
  // }
}
