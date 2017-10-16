import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';

// this component is shown when game state [in GameStateService] changes to true [when users are playing] from the menu component
// here we also show who's turn it is, the score and the winner
//
// PlayersService
// <- from this service we get all the data about the players - check playersService for a complete list of properties[line 12]

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent {
  _playersService: PlayersService;
  constructor(_playersService: PlayersService) {
    this._playersService = _playersService;
  }
}
