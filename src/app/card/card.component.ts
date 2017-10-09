import { Component, OnInit, Input } from '@angular/core';
import { GameLogicService } from '../services/game-logic.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imageSource;
  state = 'unknown';
  _gameLogic: GameLogicService;
  constructor(_gameLogic: GameLogicService) { this._gameLogic = _gameLogic; }
  getState() {
    this.state = this._gameLogic.state;
  }
  ngOnInit() {
  }

}
