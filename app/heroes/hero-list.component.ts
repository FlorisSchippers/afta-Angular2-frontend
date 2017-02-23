import { Component, OnInit } from '@angular/core';

import { IHero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    pageTitle: string = 'Heroes';
    imageWidth: number = 100;
    imageMargin: number = 5;
    showImage: boolean = true;
    listFilter: string = '';
    errorMessage: string;
    heroes: IHero[];

    constructor(private _heroService: HeroService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._heroService.getHeroes()
            .subscribe(
            heroes => this.heroes = heroes.items, //remove .items when accessing local file
            error => this.errorMessage = <any>error
            );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Heroes - ' + message;
    }
}