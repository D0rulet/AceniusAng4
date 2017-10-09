import { Component, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ManageCardsService } from '../services/manage-cards.service';
import { GetCardsService } from '../services/get-cards.service';

@Component({
  selector: 'app-get-cards',
  templateUrl: './get-cards.component.html',
  styleUrls: ['./get-cards.component.css']
})
export class GetCardsComponent {
  _pinterestUser;
  _pinterestBoard;
  _cardsNumber;
  _getCards: GetCardsService;
  _getCardsNumber: ManageCardsService;
  constructor(_getCardsNumber: ManageCardsService, _getCards: GetCardsService) {
    this._getCards = _getCards;
    this._getCardsNumber = _getCardsNumber;
  }

  get pinterestUser() {
    return this._pinterestUser;
  }
  set pinterestUser(value1) {
    this._pinterestUser = value1;
    this._getCards.generateApiUrl(this._pinterestUser, this._pinterestBoard);
    this._getCards.getCards();
  }

  get pinterestBoard() {
    return this._pinterestBoard;
  }
  set pinterestBoard(value2) {
    this._pinterestBoard = value2;
    this._getCards.generateApiUrl(this._pinterestUser, this._pinterestBoard);
    this._getCards.getCards();
  }

  get cardsNumber() {
    return this._cardsNumber;
  }
  set cardsNumber(number) {
    this._cardsNumber = number;
    this._getCardsNumber.setCardsNumber(this._cardsNumber);
  }
}
