import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisService} from './crisis.service';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CanDeactivateGuard} from '../can-deactivate-guard.service';


@NgModule({
    imports:      [ CommonModule, FormsModule,
        CrisisCenterRoutingModule ],
    declarations: [ CrisisCenterComponent, CrisisListComponent, CrisisDetailComponent, CrisisCenterHomeComponent ],
    exports:      [ CrisisCenterComponent ],
    providers:    [ CrisisService, CanDeactivateGuard ]
})
export class CrisisCenterModule { }
