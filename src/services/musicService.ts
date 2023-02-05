import { IMusic, MusicModel } from './dbModel';

export default class MusicService {
  constructor() {}

  static create(music: IMusic) {
    return new MusicModel(music).save();
  }

  static read(title: string, page: number, limit: number) {
    return MusicModel.find({ title: new RegExp(title, 'i') })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  static readCount(title: string) {
    return MusicModel.countDocuments({ title: new RegExp(title, 'i') });
  }

  // static update(title: string, music: IMusic) {
  //   return MusicModel.updateOne({ title }, { artist: music.artist });
  // }

  // static delete(title: string) {
  //   return MusicModel.remove({ title });
  // }
}
