///<reference path="./hero/hero.service.ts"/>
///<reference path="../../node_modules/angular-in-memory-web-api/in-memory-web-api.module.d.ts"/>
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent}  from './app.component';
import {HeroFormComponent} from './hero/hero-form.component';
import {Logger} from './logger.service';
import {HeroListComponent} from './hero/hero-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HeroSearchComponent} from './hero/hero-search.component';
import {HighlightDirective} from './attribute-directives/highlight.directive';
import {requestOptionsProvider} from './default-request-options.service';
import {ContactModule} from './contact/contact.module';
import {CoreModule} from './core/core.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {ComposeMessageComponent} from "./message/compose-message.component";
import {AdminModule} from "./admin/admin.module";
import {LoginRoutingModule} from "./login/login-routing.module";
import {LoginComponent} from "./login/login.component";
import {Router} from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService), CoreModule, ContactModule, CrisisCenterModule, AdminModule, LoginRoutingModule],
    declarations: [AppComponent, HeroFormComponent, HeroListComponent, DashboardComponent, HeroSearchComponent, HighlightDirective, ComposeMessageComponent, LoginComponent],
    providers: [Logger, requestOptionsProvider],
    bootstrap: [AppComponent]
})
export class AppModule {
    // 审查路由配置
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}

