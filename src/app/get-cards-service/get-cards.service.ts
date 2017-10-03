import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetCardsService {
  imageUrl;
  constructor(private _http: HttpClient) { }
  getCards(): Observable<any> {
    return this._http.get(this.imageUrl)
    .do(data => console.log(data, this.imageUrl))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
  setUrl(data) {
    this.imageUrl = data;
  }
}
