import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// simple http request service.
// get-cards component calls the generateApiUrl method
// on click of start button we subscribe to the observable by calling the getCards method
@Injectable()
export class GetCardsService {
  cardListUrl;
  constructor(private _http: HttpClient) { }
  generateApiUrl(pinterestUser, pinterestBoard) {
    return this.cardListUrl = 'https://www.acenius.com/scripts/getPinterestJson.php?user='
    + pinterestUser + '&board=' + pinterestBoard;
  }
  getCards(): Observable<any> {
    return this._http.get(this.cardListUrl)
    .catch(this.handleError);
  }
// if things go unexpected :)
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
