import TopMusicService from '../services/topMusicService';

export default class TopMusicController {
  constructor() {}

  static read(title: string, page: number, limit: number) {
    return TopMusicService.read(title, page, limit);
  }

  static readCount(title: string) {
    return TopMusicService.readCount(title);
  }
}
