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
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var router_1 = require("@angular/router");
var hero_service_provider_1 = require("./hero.service.provider");
var hero_service_1 = require("./hero.service");
var common_1 = require("@angular/common");
var user_service_1 = require("../user/user.service");
require("rxjs/add/operator/switchMap");
var HeroFormComponent = (function () {
    // @Input() hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    function HeroFormComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.submitted = false;
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    }
    HeroFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
        // this.heroService.getHero(0).then(hero => this.hero = hero);
    };
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.hero);
        },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroFormComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    return HeroFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroFormComponent.prototype, "hero", void 0);
HeroFormComponent = __decorate([
    core_1.Component({
        selector: 'hero-form',
        templateUrl: './hero-form.component.html',
        styleUrls: ['./hero-form.component.css'],
        providers: [hero_service_provider_1.heroServiceProvider, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
], HeroFormComponent);
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map