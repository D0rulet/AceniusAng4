import { Injectable } from '@angular/core';
// this service initializes the player objects and puts them in an array
@Injectable()
export class PlayersService {
  players = [];
  numPlayers = 2;
  // when this service is initialized we immediately generate 2 players.
  constructor() { this.generatePlayers(2); }
  // we get the numPlayers as a value from player name component
  // when the user selects the number of players the array of players is imeediately generated
  generatePlayers(value) {
    this.players = [];
    for (let i = 0; i < value; i++ ) {
      this.players.push({
        label: 'Player ' + (i + 1),
        playerStats: {
          name: '',
          score: 0,
          turnStart: 0,
          victor: 0,
      }} );
    }
    // initialize Player 1 turn so the game can start
    this.players[0].playerStats.turnStart = 1;
  }
}
