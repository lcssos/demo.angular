import {Logger} from '../logger.service';
import {Hero} from './hero';
import {Injectable} from '@angular/core';
// import {HEROES} from './mock-heroes';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {HEROES} from "./mock-heroes";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// 构造函数注入
@Injectable()
export class HeroService {
    private heroes: Hero[] = [];

    constructor(// private backend: BackendService,
                private logger: Logger,
                private isAuthorized: boolean,
                private http: Http) {
    }


    private heroesUrl = 'api/heroes';  // URL to web api
    // constructor(private http: Http) { }



    getHeroes(): Promise<Hero[]> {
        // return this.http.get(this.heroesUrl)
        //     .toPromise()
        //     .then(response => response.json().data as Hero[])
        //     .catch(this.handleError);
        return Promise.resolve(HEROES);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



    getHeroes2(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData2)
            .catch(this.handleError2);
    }
    private extractData2(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError2 (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }



    // 为实现异步，需使用承诺（Promise）
    // getHeroes(): Promise<Hero[]> {
    //   // this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //   //   this.logger.log(`Fetched ${heroes.length} heroes.`);
    //   //   this.heroes.push(...heroes); // fill cache
    //   // });
    //   let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    //   this.logger.log(`Getting heroes for ${auth} user.`);
    //   // this.logger.log('getting heros...');
    //   this.heroes = HEROES;
    //   return Promise.resolve(HEROES);
    // }

    // getHeroesSlowly(): Promise<Hero[]> {
    //   return new Promise(resolve => {
    //     // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(this.getHeroes()), 2000);
    //   });
    // }

    getHero(id: number): Promise<Hero> {
      return this.getHeroes()
          .then(heroes => heroes.find(hero => hero.id === id));
    }


    // getHero(id: number): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     this.logger.log(url);
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json().data as Hero)
    //         .catch(this.handleError);
    // }


    private headers = new Headers({'Content-Type': 'application/json'});
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    create2(name: string): Observable<Hero> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.heroesUrl, { name }, options)
            .map(this.extractData2)
            .catch(this.handleError2);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }




}
