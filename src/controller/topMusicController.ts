import TopMusicService from '../services/topMusicService';

export default class TopMusicController {
  constructor() {}

  static read(
    filter: string,
    keyword: string,
    page: number,
    limit: number,
    time: string
  ) {
    return TopMusicService.read(filter, keyword, page, limit, time);
  }

  static readCount(filter: string, keyword: string, time: string) {
    return TopMusicService.readCount(filter, keyword, time);
  }
}
