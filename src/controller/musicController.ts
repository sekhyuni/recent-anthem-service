import { IMusic } from '../services/dbModel';
import MusicService from '../services/musicService';

export default class MusicController {
  constructor() {}

  static createMusic(music: IMusic) {
    return MusicService.createMusic(music);
  }

  static readMusic(title: string) {
    return MusicService.readMusic(title);
  }

  // static updateMusic(title: string, music: IMusic) {
  //   return MusicService.updateMusic(title, music);
  // }

  // static deleteMusic(title: string) {
  //   return MusicService.deleteMusic(title);
  // }
}
