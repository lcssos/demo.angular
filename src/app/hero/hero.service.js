"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var logger_service_1 = require("../logger.service");
var core_1 = require("@angular/core");
// import {HEROES} from './mock-heroes';
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var mock_heroes_1 = require("./mock-heroes");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
// 构造函数注入
var HeroService = (function () {
    function HeroService(// private backend: BackendService,
        logger, isAuthorized, http) {
        this.logger = logger;
        this.isAuthorized = isAuthorized;
        this.http = http;
        this.heroes = [];
        this.heroesUrl = 'api/heroes'; // URL to web api
        // getHero(id: number): Promise<Hero> {
        //     const url = `${this.heroesUrl}/${id}`;
        //     this.logger.log(url);
        //     return this.http.get(url)
        //         .toPromise()
        //         .then(response => response.json().data as Hero)
        //         .catch(this.handleError);
        // }
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // constructor(private http: Http) { }
    HeroService.prototype.getHeroes = function () {
        // return this.http.get(this.heroesUrl)
        //     .toPromise()
        //     .then(response => response.json().data as Hero[])
        //     .catch(this.handleError);
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHeroes2 = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extractData2)
            .catch(this.handleError2);
    };
    HeroService.prototype.extractData2 = function (res) {
        var body = res.json();
        return body.data || {};
    };
    HeroService.prototype.handleError2 = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    // 为实现异步，需使用承诺（Promise）
    // getHeroes(): Promise<Hero[]> {
    //   // this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //   //   this.logger.log(`Fetched ${heroes.length} heroes.`);
    //   //   this.heroes.push(...heroes); // fill cache
    //   // });
    //   let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    //   this.logger.log(`Getting heroes for ${auth} user.`);
    //   // this.logger.log('getting heros...');
    //   this.heroes = HEROES;
    //   return Promise.resolve(HEROES);
    // }
    // getHeroesSlowly(): Promise<Hero[]> {
    //   return new Promise(resolve => {
    //     // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(this.getHeroes()), 2000);
    //   });
    // }
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.create2 = function (name) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.heroesUrl, { name: name }, options)
            .map(this.extractData2)
            .catch(this.handleError2);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.Logger, Boolean, http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map