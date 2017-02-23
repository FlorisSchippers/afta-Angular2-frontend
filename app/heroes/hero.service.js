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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var HeroService = (function () {
    // private _heroesUrl = 'http://145.24.222.119:8000/afta/heroes';
    function HeroService(_http) {
        this._http = _http;
        // private _heroesUrl = 'api/heroes/heroes.json';
        this._heroesUrl = 'http://localhost:8000/afta/heroes';
    }
    HeroService.prototype.getHeroes = function () {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._heroesUrl, options)
            .map(function (response) { return response.json(); }) //same here
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _detailUrl = this._heroesUrl + '/' + id;
        return this._http.get(_detailUrl, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    HeroService.prototype.editHero = function (id, hero) {
        var headers = new http_1.Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _detailUrl = this._heroesUrl + '/' + id;
        return this._http.put(_detailUrl, hero, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    HeroService.prototype.deleteHero = function (id) {
        var headers = new http_1.Headers({});
        var options = new http_1.RequestOptions({ headers: headers });
        var _detailUrl = this._heroesUrl + '/' + id;
        return this._http.delete(_detailUrl, options)
            .catch(this.handleError);
    };
    HeroService.prototype.addNewHero = function (newHero) {
        var headers = new http_1.Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._heroesUrl, newHero, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map