import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IHero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent {
    pageTitle: string = 'Hero Detail';
    errorMessage: string;
    hero: IHero;
    deleted: string;

    constructor(private _heroService: HeroService, private _route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this._heroService.getHero(id)
            .subscribe(
            hero => this.hero = hero,
            error => this.errorMessage = <any>error,
            );
    }

    editHero(): void {
        let id = this._route.snapshot.params['id'];
        this._router.navigate(['/hero/' + id + '/edit']);
    }

    deleteHero(): void {
        let id = this._route.snapshot.params['id'];
        this._heroService.deleteHero(id)
            .subscribe(
            error => this.errorMessage = <any>error
            );
        this.deleted = 'Deleted!';
    }

    onBack(): void {
        this._router.navigate(['/heroes']);
    }
}