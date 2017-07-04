import {Component, Inject, OnInit, Input} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {heroServiceProvider} from './hero.service.provider';
import {UserService} from '../user/user.service';
import {APP_CONFIG, AppConfig, HERO_DI_CONFIG} from '../app-config';
import {Logger} from '../logger.service';
import {Router} from "@angular/router";

import {trigger, state, style, animate, transition} from '@angular/animations';


//  providers:  [ HeroService ]
// providers: [heroServiceProvider]
@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css'],
    providers: [heroServiceProvider, UserService, {provide: APP_CONFIG, useValue: HERO_DI_CONFIG}],
    // animations: [
    //     trigger('heroState', [
    //         state('inactive', style({
    //             backgroundColor: '#eee',
    //             transform: 'scale(1)'
    //         })),
    //         state('active',   style({
    //             backgroundColor: '#cfd8dc',
    //             transform: 'scale(1.1)'
    //         })),
    //         transition('inactive => active', animate('100ms ease-in')),
    //         transition('active => inactive', animate('100ms ease-out'))
    //     ])
    // ]

})

export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    title: string;

    errorMessage: string;

    constructor(private logger: Logger, private router: Router, private heroService: HeroService, @Inject(APP_CONFIG) config: AppConfig) {
        this.title = config.title;
    }

    // constructor(private heroServiceProvider: any) { }

    ngOnInit() {
        // this.heroes = this.heroService.getHeroes();
        // 使用承诺获取内容
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    getHeroes2() {
        this.heroService.getHeroes2()
            .subscribe(
                heroes => this.heroes = heroes,
                error =>  this.errorMessage = <any>error);
    }

    selectHero(hero: Hero) {
        this.selectedHero = hero;
        this.logger.log(hero);
    }

    gotoDetail(): void {
        this.router.navigate(['/hero', this.selectedHero.id]);
    }


    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
    add2(name: string) {
        if (!name) { return; }
        this.heroService.create2(name)
            .subscribe(
                hero  => this.heroes.push(hero),
                error =>  this.errorMessage = <any>error);
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }



}
