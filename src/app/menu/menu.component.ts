import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { GetCardsService } from '../services/get-cards.service';
import { ManageCardsService } from '../services/manage-cards.service';
import { GameLogicService } from '../services/game-logic.service';
import { PlayersService } from '../services/players.service';
import { GameStateService } from '../services/game-state.service';
// this component is the core of the app
// acts like a parent to all other components except app-component
// all other components are direct children to this component
// it sets the state of the game
//
// GetCardsService
// <- we subscribe to our observable and get the images links from the API
// -> then process the images links in ManageCardsService
// there they become available to the card component so we get to see the cards
//
// GameLogicService
// -> when we restart the app we need to resed the number of guessed pairs to 0 otherwise the winner will be wrongly declared
//
// PlayersService
// <- we check in the service if the names are there so we can validate
// angular form validation is also an alternative, not implemented here though
//
// GameStateService
// -> here we set the state of the game and make it available for other components so everybody is aware if we are playing or not

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cardListUrl;
  errorMessage;
  playerArr = [];
  _getCardsService: GetCardsService;
  _manageCardsService: ManageCardsService;
  _gameLogicService: GameLogicService;
  _playersService: PlayersService;
  _gameStateService: GameStateService;
  constructor(
    _getCardsService: GetCardsService,
    _manageCardsService: ManageCardsService,
    _gameLogicService: GameLogicService,
    _playersService: PlayersService,
    _gameStateService: GameStateService) {
    this._getCardsService = _getCardsService;
    this._manageCardsService = _manageCardsService;
    this._gameLogicService = _gameLogicService;
    this._playersService = _playersService;
    this._gameStateService = _gameStateService;
   }
  ngOnInit() {
  }

  // on Start Button click
  start() {
    //  we check for names to be filled
    for (let i = 0; i < this._playersService.players.length; i++) {
      if (this._playersService.players[i].playerStats.name.length === 0 ) {
        alert('Please fill all player names');
        return;
      }
    }
    // set the game to playing hence making the menu disabled
    this._gameStateService.disabled = true;
    // get data from API then send it to processing
    this._getCardsService.getCards()
    .subscribe(data => {
      this.cardListUrl = data.item.map(card => card.image);
      this._manageCardsService.finalCardList = this._manageCardsService.createFinalCardList(this.cardListUrl);
  },
      // throw an error if there is a problem with the API answer
      // set the game to not playing
      error => {this.errorMessage = <any>error;
                alert('Pinterest User or Board not found');
                this._gameStateService.disabled = false;
              });
  }
  // reinitialize all the necessary values so we can start a fresh instance of the game
  // the pinterest user and board do not get a reset -> I thought its just more practical this way
  // makes more sense to restart so other players can join
  restart() {
    this._gameStateService.disabled = false;
    this._manageCardsService.cardsObject = [];
    this._playersService.generatePlayers(2);
    this._gameLogicService.guessedPairs = 0;
  }
}
