///<reference path="./hero/hero.service.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero/hero-form.component';
import {Logger} from './logger.service';
import {HeroListComponent} from './hero/hero-list.component';
// import {HeroService} from '../hero/hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroFormComponent, HeroListComponent ],
  providers:    [ Logger ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
