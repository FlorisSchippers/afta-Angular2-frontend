import { Component } from '@angular/core';

import { HeroService } from './heroes/hero.service';

@Component({
    selector: 'afta-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    providers: [HeroService]
})
export class AppComponent {
    pageTitle: string = 'Afta Hero Index';
}