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
var HeroEditComponent = (function () {
    function HeroEditComponent(_heroService, _route, _router) {
        this._heroService = _heroService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Hero Edit';
    }
    HeroEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        this._heroService.getHero(id)
            .subscribe(function (hero) {
            _this.hero = hero,
                _this.name = _this.hero.name,
                _this.type = _this.hero.type,
                _this.attribute = _this.hero.attribute,
                _this.rank = _this.hero.rank,
                _this.image = _this.hero.image;
        }, function (error) { return _this.errorMessage = error; });
    };
    HeroEditComponent.prototype.editHero = function () {
        var _this = this;
        this.newHero = {
            "name": this.name,
            "type": this.type,
            "attribute": this.attribute,
            "image": this.image,
            "rank": this.rank
        };
        var id = this._route.snapshot.params['id'];
        this._heroService.editHero(id, this.newHero)
            .subscribe(function (newHero) { return _this.newHero = newHero; }, function (error) { return _this.errorMessage = error; });
        this.edited = 'Edited!';
    };
    HeroEditComponent.prototype.onBack = function () {
        var id = this._route.snapshot.params['id'];
        this._router.navigate(['/hero/' + id]);
    };
    return HeroEditComponent;
}());
HeroEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'hero-edit.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
], HeroEditComponent);
exports.HeroEditComponent = HeroEditComponent;
//# sourceMappingURL=hero-edit.component.js.map