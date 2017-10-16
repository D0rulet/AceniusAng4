import { Component } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { GameStateService } from '../services/game-state.service';
// this component takes care of player names across the app
//
// PlayersService
// -> with two way data binding we update this service sending the names the user inputs
// they become immediately available to the score board component
// -> also we update this service with the number of players
// in the service an array of player objects will be created with all the data necessary for changing turns/keeping score/winning
//
// _gameStateService
// <- we make inputs active or inactive based upon the state of the game
@Component({
  selector: 'app-player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css']
})
export class PlayerNameComponent {
  numPlayers;
  playerName = '';
  _playersService: PlayersService;
  _gameStateService: GameStateService;
  constructor(_playersService: PlayersService, _gameStateService: GameStateService) {
    this._playersService = _playersService;
    this._gameStateService = _gameStateService; }
}
