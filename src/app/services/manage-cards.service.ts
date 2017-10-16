import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// this service deals with more array manipulation than actual logic for the app
// here the array from the observable gets passed in and doubled then shuffled
// here the number of cards array is sliced to match the input cards number
// we send to card component an array of objects for the loop - object contain the image link and the class for that image
// in card component the loop generates the images with the links and the class='unknown'
@Injectable()
export class ManageCardsService {
  finalCardList: any[];
  cardsObject;
  cardsNumber = 16;
  constructor() {}
  setCardsNumber(number) {
    this.cardsNumber = number;
  }
  // slice to desired array length, double the cards, shuffle them, push objects in finalCardList, assign to object
  // the cardsObject is what we ultimately use in card component
  createFinalCardList(cardList) {
    this.finalCardList = [];
    cardList = cardList.slice(0, this.cardsNumber);
    for (const i of cardList){
      this.finalCardList.push(i, i);
    }
    this.fisherYates(this.finalCardList);
    this.cardsObject = this.finalCardList.map( item => ({'url': item , 'class': 'unknown'}) );
    return this.cardsObject;
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
