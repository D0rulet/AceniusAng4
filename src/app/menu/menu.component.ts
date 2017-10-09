import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { GetCardsService } from '../services/get-cards.service';
import { ManageCardsService } from '../services/manage-cards.service';
import { GameLogicService } from '../services/game-logic.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cardListUrl;
  finalCardList = [];
  errorMessage;
  playerArr = [];
  _getCardsService: GetCardsService;
  _manageCardsService: ManageCardsService;
  _gameLogic: GameLogicService;
  constructor(
    _getCardsService: GetCardsService,
    _manageCardsService: ManageCardsService,
    _gameLogic: GameLogicService) {
    this._getCardsService = _getCardsService;
    this._manageCardsService = _manageCardsService;
    this._gameLogic = _gameLogic;
   }
  ngOnInit() {
  }
  clickCard(image, index) {
    this._gameLogic.clickCard(image, index);
  }
  takePlayerArr(value) {
    this.playerArr = value;
    // console.log(value);
  }
  start() {
    this._getCardsService.getCards()
      .subscribe(data => {
        this.cardListUrl = data.item.map(card => card.image);
        this.finalCardList = this._manageCardsService.createFinalCardList(this.cardListUrl);
        // console.log('this is the finale card list, ', this.finalCardList);
    },
      error => this.errorMessage = <any>error);
  }
}
