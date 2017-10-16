import { Injectable, Renderer2, ElementRef } from '@angular/core';
import { ManageCardsService } from './manage-cards.service';
import { PlayersService } from './players.service';
// this service holds the logic for playing the game
// we keep track here of who's turn it is / score / who wins
// we manipulate the css classes of the cards -> they have 3 states
// unknown -> card is facing down [default]
// in-focus -> card is clicked
// known -> card has found its pair so it remains facing up
// we know at all times who the player with the most points is and in the end we just give him the glory
@Injectable()
export class GameLogicService {
    clickedCards = [];
    activePlayer;
    guessedPairs = 0;
    maxScore = 0;
    _playersService: PlayersService;
    _manageCardsService: ManageCardsService;
    constructor(_playersService: PlayersService, _manageCardsService: ManageCardsService) {
        this._playersService = _playersService;
        this._manageCardsService = _manageCardsService;
    }

    clickCard(image) {
        // store clicked cards
        this.clickedCards.push(image);
        // can only bring in focus only 2 cards at a time
        this.clickedCards.length <= 2 ? image.class = 'in-focus' : image.class = 'unknown';
        if (this.clickedCards.length === 2) {
            // logic for finding a pair
            if (this.clickedCards[0].url === this.clickedCards[1].url) {
                // put cards on known state
                this.clickedCards.forEach( clicked => clicked.class = 'known' );
                this.clickedCards = [];
                this._playersService.players.forEach( player => {
                    // award a point to the right player
                    if (player.playerStats.turnStart === 1) {
                    player.playerStats.score++;
                    // keep track of the largest amount of points
                    if (player.playerStats.score > this.maxScore) {
                        this.maxScore = player.playerStats.score;
                    }
                }
                });
                // keep track of guessed pairs so we know when the game is over
                this.guessedPairs++;
            } else if (this.clickedCards[0].url !== this.clickedCards[1].url) {
                // logic for failing in finding a pair
                // setTimeout has to use arrow function in order to preserve the scope
                setTimeout(() => {
                    // bring back the cards to face down - unknown
                    this.clickedCards.forEach( clicked => clicked.class = 'unknown' );
                    this.clickedCards = [];
                    // here we switch turns to next player
                    for (let i = 0; i < this._playersService.players.length; i++) {
                        if (this._playersService.players[i].playerStats.turnStart === 1 ) {
                            this._playersService.players[i].playerStats.turnStart = 0;
                            this._playersService.players[(i + 1) % this._playersService.players.length].playerStats.turnStart = 1;
                            return;
                        }
                    }
                }, 2000);
            }
        }
        // rules for when the game ends -> declaring the winner
        if (this._manageCardsService.cardsNumber === this.guessedPairs) {
            for (let i = 0; i < this._playersService.players.length; i++) {
                if (this._playersService.players[i].playerStats.score === this.maxScore) {
                    this._playersService.players[i].playerStats.victor = 1;
                }
            }

        }
    }
}
