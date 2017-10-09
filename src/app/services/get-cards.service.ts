import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetCardsService {
  cardListUrl;
  constructor(private _http: HttpClient) { }
  generateApiUrl(pinterestUser, pinterestBoard) {
    return this.cardListUrl = 'https://www.acenius.com/scripts/getPinterestJson.php?user='
    + pinterestUser + '&board=' + pinterestBoard;
  }
  getCards(): Observable<any> {
    console.log(this.cardListUrl);
    return this._http.get(this.cardListUrl)
    .do(data => console.log(data, this.cardListUrl))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
