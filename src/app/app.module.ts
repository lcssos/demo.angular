///<reference path="./hero/hero.service.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero/hero-form.component';
import {Logger} from './logger.service';
import {HeroListComponent} from './hero/hero-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HeroSearchComponent} from "./hero/hero-search.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, HeroFormComponent, HeroListComponent, DashboardComponent, HeroSearchComponent ],
  providers:    [ Logger ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

