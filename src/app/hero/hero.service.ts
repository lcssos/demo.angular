import {Logger} from '../logger.service';
import {Hero} from './hero';
import {Injectable} from '@angular/core';

// 构造函数注入
@Injectable()
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    // private backend: BackendService,
    private logger: Logger,
    private isAuthorized: boolean
  ) { }

  getHeroes() {
    // this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //   this.logger.log(`Fetched ${heroes.length} heroes.`);
    //   this.heroes.push(...heroes); // fill cache
    // });
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    // this.logger.log('getting heros...');
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    return this.heroes;
  }
}
