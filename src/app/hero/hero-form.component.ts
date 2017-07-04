import {Component, Input, OnInit} from '@angular/core';

import {Hero}    from './hero';
import {ActivatedRoute, Params} from "@angular/router";
import {heroServiceProvider} from "./hero.service.provider";
import {HeroService} from "./hero.service";
import {Location} from '@angular/common';
import {UserService} from "../user/user.service";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css'],
    providers: [heroServiceProvider, UserService]
})
export class HeroFormComponent implements OnInit {

    @Input() hero: Hero;
    submitted = false;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
        // this.heroService.getHero(0).then(hero => this.hero = hero);
    }

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    // @Input() hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {
    }

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }




}
