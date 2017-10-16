import { Component, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ManageCardsService } from '../services/manage-cards.service';
import { GetCardsService } from '../services/get-cards.service';
import { GameStateService } from '../services/game-state.service';
// This component interacts with
//
// ManageCardsService
// -> updates cardsNumber in the service so we show the right amoung of images
//
// GetCardsService
// -> as the user types in the pinterest user and board we update the URL for the API call in the service
// -> also the observable is called so when we start the game we just subscribe to the observable's data
// -> the observable will become active only when subscribed, not on every keyup event so only when the start button is pressed
//
// GameStateService
// <- we listen to a value from this service - game state will render the inputs active or inactive[disabled]
@Component({
  selector: 'app-get-cards',
  templateUrl: './get-cards.component.html',
  styleUrls: ['./get-cards.component.css']
})
export class GetCardsComponent {
  _pinterestUser;
  _pinterestBoard;
  _getCardsService: GetCardsService;
  _manageCardsService: ManageCardsService;
  _gameStateService: GameStateService;
  _cardsNumber;
  constructor(_manageCardsService: ManageCardsService, _getCardsService: GetCardsService, _gameStateService: GameStateService) {
    this._getCardsService = _getCardsService;
    this._manageCardsService = _manageCardsService;
    this._cardsNumber = this._manageCardsService.cardsNumber;
    this._gameStateService = _gameStateService;
  }

  get pinterestUser() {
    return this._pinterestUser;
  }
  set pinterestUser(value1) {
    this._pinterestUser = value1;
    this._getCardsService.generateApiUrl(this._pinterestUser, this._pinterestBoard);
    this._getCardsService.getCards();
  }

  get pinterestBoard() {
    return this._pinterestBoard;
  }
  set pinterestBoard(value2) {
    this._pinterestBoard = value2;
    this._getCardsService.generateApiUrl(this._pinterestUser, this._pinterestBoard);
    this._getCardsService.getCards();
  }

  get cardsNumber() {
    return this._cardsNumber;
  }
  set cardsNumber(number) {
    this._cardsNumber = number;
    this._manageCardsService.setCardsNumber(this._cardsNumber);
  }
}
