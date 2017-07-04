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
var router_1 = require("@angular/router");
//  providers:  [ HeroService ]
// providers: [heroServiceProvider]
var HeroListComponent = (function () {
    function HeroListComponent(logger, router, heroService, config) {
        this.logger = logger;
        this.router = router;
        this.heroService = heroService;
        this.title = config.title;
    }
    // constructor(private heroServiceProvider: any) { }
    HeroListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.heroes = this.heroService.getHeroes();
        // 使用承诺获取内容
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroListComponent.prototype.getHeroes2 = function () {
        var _this = this;
        this.heroService.getHeroes2()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroListComponent.prototype.selectHero = function (hero) {
        this.selectedHero = hero;
        this.logger.log(hero);
    };
    HeroListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/hero', this.selectedHero.id]);
    };
    HeroListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroListComponent.prototype.add2 = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this.heroService.create2(name)
            .subscribe(function (hero) { return _this.heroes.push(hero); }, function (error) { return _this.errorMessage = error; });
    };
    HeroListComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    core_1.Component({
        selector: 'hero-list',
        templateUrl: './hero-list.component.html',
        styleUrls: ['./hero-list.component.css'],
        providers: [hero_service_provider_1.heroServiceProvider, user_service_1.UserService, { provide: app_config_1.APP_CONFIG, useValue: app_config_1.HERO_DI_CONFIG }],
    }),
    __param(3, core_1.Inject(app_config_1.APP_CONFIG)),
    __metadata("design:paramtypes", [logger_service_1.Logger, router_1.Router, hero_service_1.HeroService, Object])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map