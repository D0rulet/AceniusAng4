import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManageCardsService {
  finalCardList;
  cardsNumber = 16;
  constructor() {}
  setCardsNumber(number) {
    return this.cardsNumber = number;
  }
  // double the cards
  createFinalCardList(cardList) {
    this.finalCardList = [];
    cardList = cardList.slice(0, this.cardsNumber);
    // console.log(cardList);
    for (const i of cardList){
      this.finalCardList.push(i, i);
    }
    this.fisherYates(this.finalCardList);
    // console.log('createFinalcardList was triggered', this.finalCardList);
    return this.finalCardList;
  }
// rand function -> http://sedition.com/perl/javascript-fy.html
  fisherYates ( myArray ) {
    let i = myArray.length;
    while ( --i ) {
      const j = Math.floor( Math.random() * ( i + 1 ) );
      const tempi = myArray[i];
      const tempj = myArray[j];
      myArray[i] = tempj;
      myArray[j] = tempi;
     }
  }
}
