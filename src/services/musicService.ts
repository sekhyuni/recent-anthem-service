import { IMusic, MusicModel } from './dbModel';

export default class MusicService {
  constructor() {}

  static createMusic(music: IMusic) {
    return new MusicModel(music).save();
  }

  static readMusic(title: string, page: number, limit: number) {
    return MusicModel.find({ title: new RegExp(title, 'i') })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  static readMusicCount(title: string) {
    return MusicModel.countDocuments({ title: new RegExp(title, 'i') });
  }

  // static updateMusic(title: string, music: IMusic) {
  //   return MusicModel.updateOne({ title }, { artist: music.artist });
  // }

  // static deleteMusic(title: string) {
  //   return MusicModel.remove({ title });
  // }
}
