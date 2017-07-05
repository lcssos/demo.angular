import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroFormComponent} from "./hero/hero-form.component";
import {HeroListComponent} from "./hero/hero-list.component";
import {ContactComponent} from "./contact/contact.component";
import {ComposeMessageComponent} from "./message/compose-message.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'hero/:id', component: HeroFormComponent },
    { path: 'heroes',     component: HeroListComponent },
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    // { path: 'contact', component: ContactComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
