import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-add.component.html'
})
export class HeroAddComponent {
    pageTitle: string = 'Add New Hero';
    name: string;
    type: string;
    attribute: string;
    rank: number;
    image: string;
    newHero: {};
    errorMessage: string;
    added: string;

    constructor(private _heroService: HeroService, private _router: Router) { }

    addNewHero(): void {
        this.newHero = {
            "name": this.name,
            "type": this.type,
            "attribute": this.attribute,
            "image": this.image,
            "rank": this.rank
        };
        this._heroService.addNewHero(this.newHero)
            .subscribe(
            newHero => this.newHero = newHero,
            error => this.errorMessage = <any>error
            );
        this.added = 'Added!';
    }

    onBack(): void {
        this._router.navigate(['/heroes']);
    }

}