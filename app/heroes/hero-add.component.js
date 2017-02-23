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
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroAddComponent = (function () {
    function HeroAddComponent(_heroService, _router) {
        this._heroService = _heroService;
        this._router = _router;
        this.pageTitle = 'Add New Hero';
    }
    HeroAddComponent.prototype.addNewHero = function () {
        var _this = this;
        this.newHero = {
            "name": this.name,
            "type": this.type,
            "attribute": this.attribute,
            "image": this.image,
            "rank": this.rank
        };
        this._heroService.addNewHero(this.newHero)
            .subscribe(function (newHero) { return _this.newHero = newHero; }, function (error) { return _this.errorMessage = error; });
        this.added = 'Added!';
    };
    HeroAddComponent.prototype.onBack = function () {
        this._router.navigate(['/heroes']);
    };
    return HeroAddComponent;
}());
HeroAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'hero-add.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.Router])
], HeroAddComponent);
exports.HeroAddComponent = HeroAddComponent;
//# sourceMappingURL=hero-add.component.js.map