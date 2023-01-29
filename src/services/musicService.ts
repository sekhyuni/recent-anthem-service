import { IMusic, MusicModel } from './dbModel';

export default class MusicService {
  constructor() {}

  static createMusic(music: IMusic) {
    return new MusicModel(music).save();
  }

  static readMusic(title: string) {
    return MusicModel.find({ title: new RegExp(title) });
  }

  // static updateMusic(title: string, music: IMusic) {
  //   return MusicModel.updateOne({ title }, { artist: music.artist });
  // }

  // static deleteMusic(title: string) {
  //   return MusicModel.remove({ title });
  // }
}
