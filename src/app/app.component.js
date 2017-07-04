"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//   template: `<h1>Hello {{name}}</h1>
//   <h1>{{title}}</h1>
// <h2>My favorite hero is: {{myHero.name}}</h2>
// <p>Heroes:</p>
// <ul>
//   <li *ngFor="let hero of heroes">
//   {{ hero.name }}
// </li>
// </ul>
//   <p *ngIf="heroes.length > 3">There are many heroes!</p>
//   `,
//   templateUrl: './app.component.html'
// template: `<hero-form></hero-form>`,
// template: `<hero-list></hero-list>`
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        // heroes = [
        //   new Hero(1, 'Windstorm'),
        //   new Hero(13, 'Bombasto'),
        //   new Hero(15, 'Magneta'),
        //   new Hero(20, 'Tornado')
        // ];
        // myHero = this.heroes[0];
        this.name = 'Angular2';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map