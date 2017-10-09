import { Injectable, Renderer2, ElementRef } from '@angular/core';

@Injectable()
export class GameLogicService {
    clickedCards = [];
    state = 'clicked';
    constructor() { }
    clickCard(image, index) {
        console.log(this);
        this.state = 'clicked';
        if (this.clickedCards.length < 3) {
            this.clickedCards.push(image);
            if (this.clickedCards[0] === this.clickedCards[1]) {
                console.log('win');
                this.state = 'known';
                this.clickedCards = [];
            } else if (this.clickedCards[0] !== this.clickedCards[1] && this.clickedCards.length === 2) {
                console.log('lose');
                this.state = 'unknown';
                this.clickedCards = [];
            }
        }
    }
}
