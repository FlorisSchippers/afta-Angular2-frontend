"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HeroListComponent = (function () {
    function HeroListComponent(_heroService) {
        this._heroService = _heroService;
        this.pageTitle = 'Heroes';
        this.imageWidth = 100;
        this.imageMargin = 5;
        this.showImage = true;
        this.listFilter = '';
    }
    HeroListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    HeroListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.items; }, //remove .items when accessing local file
        function (//remove .items when accessing local file
            error) { return _this.errorMessage = error; });
    };
    HeroListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Heroes - ' + message;
    };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'hero-list.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroListComponent);
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.component.js.map