import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerName;
  playerScore = 0;
  playerTurnStart;
  playerTurnEnd;
  playerSuccesRound;
  playerFailRound;
  playerWonGame;
  constructor() { }

  ngOnInit() {
  }

}
