import TopMusicService from '../services/topMusicService';

export default class TopMusicController {
  constructor() {}

  static read(filter: string, keyword: string, page: number, limit: number) {
    return TopMusicService.read(filter, keyword, page, limit);
  }

  static readCount(filter: string, keyword: string) {
    return TopMusicService.readCount(filter, keyword);
  }
}
