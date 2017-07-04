import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero/hero";
import {HeroService} from "../hero/hero.service";
import {heroServiceProvider} from "../hero/hero.service.provider";
import {UserService} from "../user/user.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
    providers: [heroServiceProvider, UserService]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}

