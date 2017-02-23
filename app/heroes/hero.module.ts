import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { HeroAddComponent } from './hero-add.component';
import { HeroEditComponent } from './hero-edit.component';
import { HeroFilterPipe } from './hero-filter.pipe';
import { HeroService } from './hero.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'heroes', component: HeroListComponent },
            { path: 'hero/:id', component: HeroDetailComponent },
            { path: 'hero/:id/edit', component: HeroEditComponent },
            { path: 'add', component: HeroAddComponent }
        ])
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent,
        HeroAddComponent,
        HeroEditComponent,
        HeroFilterPipe
    ],
    providers: [
        HeroService
    ]
})
export class HeroModule { }