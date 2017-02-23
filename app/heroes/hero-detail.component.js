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
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_heroService, _route, _router) {
        this._heroService = _heroService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Hero Detail';
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        this._heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; }, function (error) { return _this.errorMessage = error; });
    };
    HeroDetailComponent.prototype.editHero = function () {
        var id = this._route.snapshot.params['id'];
        this._router.navigate(['/hero/' + id + '/edit']);
    };
    HeroDetailComponent.prototype.deleteHero = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        this._heroService.deleteHero(id)
            .subscribe(function (error) { return _this.errorMessage = error; });
        this.deleted = 'Deleted!';
    };
    HeroDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/heroes']);
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'hero-detail.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map