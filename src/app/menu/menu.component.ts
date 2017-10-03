import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { GetCardsService } from '../get-cards-service/get-cards.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cardListUrl;
  getCardsService: GetCardsService;
  constructor(getCardService: GetCardsService) {
    this.getCardsService = getCardService;
   }
  ngOnInit() {
  }

  generateInputObject() {

  }
  generateApiUrl(userAndBoard) {
    this.cardListUrl = 'https://www.acenius.com/scripts/getPinterestJson.php?user=' + userAndBoard.user + '&board=' + userAndBoard.board;
    console.log(this.cardListUrl);
    this.getCardsService.setUrl(this.cardListUrl);
  }
}
