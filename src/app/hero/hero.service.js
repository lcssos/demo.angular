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
var hero_1 = require("./hero");
var core_1 = require("@angular/core");
// 构造函数注入
var HeroService = (function () {
    function HeroService(
        // private backend: BackendService,
        logger, isAuthorized) {
        this.logger = logger;
        this.isAuthorized = isAuthorized;
        this.heroes = [];
    }
    HeroService.prototype.getHeroes = function () {
        // this.backend.getAll(Hero).then( (heroes: Hero[]) => {
        //   this.logger.log(`Fetched ${heroes.length} heroes.`);
        //   this.heroes.push(...heroes); // fill cache
        // });
        var auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
        this.logger.log("Getting heroes for " + auth + " user.");
        // this.logger.log('getting heros...');
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm'),
            new hero_1.Hero(13, 'Bombasto'),
            new hero_1.Hero(15, 'Magneta'),
            new hero_1.Hero(20, 'Tornado')
        ];
        return this.heroes;
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [logger_service_1.Logger, Boolean])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map