import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-name',
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css']
})
export class PlayerNameComponent implements OnInit {
  numberOfPlayers;
  players= [];
  constructor() { }
  generatePlayerArray() {
    this.players = [];
    for ( let i = 0 ; i < this.numberOfPlayers; i++) {
      this.players.push({name: ('Player ' + (1 + i)), nameVar: ((1 + i) + ' players')});
    }
  }
  ngOnInit() {
  }

}
