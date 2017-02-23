import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IHero } from './hero';

@Injectable()
export class HeroService {
    // private _heroesUrl = 'api/heroes/heroes.json';
    private _heroesUrl = 'http://localhost:8000/afta/heroes';
    // private _heroesUrl = 'http://145.24.222.119:8000/afta/heroes';

    constructor(private _http: Http) { }

    getHeroes(): Observable<any> { //<any> used instead of <IHero[]> since I need the items value
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this._heroesUrl, options)
            .map((response: Response) => <any>response.json()) //same here
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getHero(id: any): Observable<IHero> {
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _detailUrl = this._heroesUrl + '/' + id;

        return this._http.get(_detailUrl, options)
            .map((response: Response) => <IHero>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    editHero(id: any, hero: {}): Observable<IHero> {
        let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _detailUrl = this._heroesUrl + '/' + id;

        return this._http.put(_detailUrl, hero, options)
            .map((response: Response) => <IHero>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteHero(id: any): Observable<any> {
        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });
        let _detailUrl = this._heroesUrl + '/' + id;

        return this._http.delete(_detailUrl, options)
            .catch(this.handleError);
    }

    addNewHero(newHero: {}): Observable<IHero> {
        let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._heroesUrl, newHero, options)
            .map((response: Response) => <IHero>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}