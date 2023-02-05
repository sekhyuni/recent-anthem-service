import { IMusic } from '../services/dbModel';
import MusicService from '../services/musicService';

export default class MusicController {
  constructor() {}

  static create(music: IMusic) {
    return MusicService.create(music);
  }

  static read(title: string, page: number, limit: number) {
    return MusicService.read(title, page, limit);
  }

  static readCount(title: string) {
    return MusicService.readCount(title);
  }

  // static update(title: string, music: IMusic) {
  //   return MusicService.update(title, music);
  // }

  // static delete(title: string) {
  //   return MusicService.delete(title);
  // }
}
