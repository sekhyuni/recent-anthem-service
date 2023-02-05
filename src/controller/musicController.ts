import { IMusic } from '../services/dbModel';
import MusicService from '../services/musicService';

export default class MusicController {
  constructor() {}

  static create(music: IMusic) {
    return MusicService.create(music);
  }

  static read(filter: string, keyword: string, page: number, limit: number) {
    return MusicService.read(filter, keyword, page, limit);
  }

  static readCount(filter: string, keyword: string) {
    return MusicService.readCount(filter, keyword);
  }

  // static update(title: string, music: IMusic) {
  //   return MusicService.update(title, music);
  // }

  // static delete(title: string) {
  //   return MusicService.delete(title);
  // }
}
