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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var hero_service_provider_1 = require("./hero.service.provider");
var user_service_1 = require("../user/user.service");
var app_config_1 = require("../app-config");
var logger_service_1 = require("../logger.service");
//  providers:  [ HeroService ]
// providers: [heroServiceProvider]
var HeroListComponent = (function () {
    function HeroListComponent(logger, service, config) {
        this.logger = logger;
        this.service = service;
        this.title = config.title;
    }
    // constructor(private heroServiceProvider: any) { }
    HeroListComponent.prototype.ngOnInit = function () {
        this.heroes = this.service.getHeroes();
    };
    HeroListComponent.prototype.selectHero = function (hero) {
        this.selectedHero = hero;
        this.logger.log(hero);
    };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    core_1.Component({
        selector: 'hero-list',
        templateUrl: './hero-list.component.html',
        styleUrls: ['./hero-list.component.css'],
        providers: [hero_service_provider_1.heroServiceProvider, user_service_1.UserService, { provide: app_config_1.APP_CONFIG, useValue: app_config_1.HERO_DI_CONFIG }]
    }),
    __param(2, core_1.Inject(app_config_1.APP_CONFIG)),
    __metadata("design:paramtypes", [logger_service_1.Logger, hero_service_1.HeroService, Object])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map