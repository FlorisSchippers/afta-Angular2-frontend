import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IHero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-edit.component.html'
})
export class HeroEditComponent {
    pageTitle: string = 'Hero Edit';
    hero: IHero;
    name: string;
    type: string;
    attribute: string;
    rank: number;
    image: string;
    newHero: {};
    errorMessage: string;
    edited: string;

    constructor(private _heroService: HeroService, private _route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this._heroService.getHero(id)
            .subscribe(
            hero => {
                this.hero = hero,
                this.name = this.hero.name,
                this.type = this.hero.type,
                this.attribute = this.hero.attribute,
                this.rank = this.hero.rank,
                this.image = this.hero.image
            },
            error => this.errorMessage = <any>error
            );
    }

    editHero(): void {
        this.newHero = {
            "name": this.name,
            "type": this.type,
            "attribute": this.attribute,
            "image": this.image,
            "rank": this.rank
        };
        let id = this._route.snapshot.params['id'];
        this._heroService.editHero(id, this.newHero)
            .subscribe(
            newHero => this.newHero = newHero,
            error => this.errorMessage = <any>error
            );
        this.edited = 'Edited!';
    }

    onBack(): void {
        let id = this._route.snapshot.params['id'];
        this._router.navigate(['/hero/' + id]);
    }
}