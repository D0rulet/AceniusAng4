import { Component } from '@angular/core';
import { GameLogicService } from '../services/game-logic.service';
import { GetCardsService } from '../services/get-cards.service';
import { ManageCardsService } from '../services/manage-cards.service';


// This component interacts with
// GameLogicService
//  -> sends info about the clicked card
//  <- receives info about class [therefore cards flip / are guessed / are blank -> in-focus, known, unknown]
// ManageCardsService
//  <- receives processed image links in an object format so the *ngFor can build all the cards.
//  the object contains the link and the class [default -> 'unknown']
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  class = 'unknown';
  _gameLogic: GameLogicService;
  _getCardsService: ManageCardsService;
  constructor(_gameLogic: GameLogicService, _getCardsService: ManageCardsService) {
    this._gameLogic = _gameLogic;
    this._getCardsService = _getCardsService;
  }
  clickCard(image) {
    this._gameLogic.clickCard(image);
  }
}
