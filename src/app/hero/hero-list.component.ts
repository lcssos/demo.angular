import {Component, Inject, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {heroServiceProvider} from './hero.service.provider';
import {UserService} from '../user/user.service';
import {APP_CONFIG, AppConfig, HERO_DI_CONFIG} from '../app-config';
import {Logger} from '../logger.service';

//  providers:  [ HeroService ]
// providers: [heroServiceProvider]
@Component({
  selector:    'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [heroServiceProvider, UserService, { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
})

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  title: string;

  constructor(private logger: Logger, private service: HeroService, @Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
  }
  // constructor(private heroServiceProvider: any) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    this.logger.log(hero);
  }
}
