import {Logger} from '../logger.service';
import {Hero} from './hero';
import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

// 构造函数注入
@Injectable()
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    // private backend: BackendService,
    private logger: Logger,
    private isAuthorized: boolean
  ) { }

  // 为实现异步，需使用承诺（Promise）
  getHeroes(): Promise<Hero[]> {
    // this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //   this.logger.log(`Fetched ${heroes.length} heroes.`);
    //   this.heroes.push(...heroes); // fill cache
    // });
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    // this.logger.log('getting heros...');
    this.heroes = HEROES;
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
  }
}
