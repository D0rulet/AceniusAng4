import { Injectable } from '@angular/core';

@Injectable()
export class ManageCardsService {
  finalCardList;
  cardsNumber = 20;
  constructor() { }

  // double the cards and call reandomize function
  createFinalCardList(cardList) {
    cardList = cardList.slice(0, this.cardsNumber);
    console.log('createFinalcardList was triggered');
    this.finalCardList = [];
    for (const i of cardList){
      this.finalCardList.push(i, i);
    }
    this.fisherYates(this.finalCardList);
    console.log(this.finalCardList);
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

  getCardsNumber(cardsNumber) {
    this.cardsNumber = cardsNumber;
  }
}
