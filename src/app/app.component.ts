import { Component } from '@angular/core';
import {Hero} from './hero/hero';

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
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  title = 'Tour of Heroes';
  // heroes = [
  //   new Hero(1, 'Windstorm'),
  //   new Hero(13, 'Bombasto'),
  //   new Hero(15, 'Magneta'),
  //   new Hero(20, 'Tornado')
  // ];
  // myHero = this.heroes[0];
  name = 'Angular2';
}
