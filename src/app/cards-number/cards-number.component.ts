import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ManageCardsService } from '../manage-cards.service';

@Component({
  selector: 'app-cards-number',
  templateUrl: './cards-number.component.html',
  styleUrls: ['./cards-number.component.css']
})
export class CardsNumberComponent implements OnChanges {
  _getCardsNumber: ManageCardsService;
  cardsNumber;
  constructor(_getCardsNumber: ManageCardsService) { }

  ngOnChanges(changes: SimpleChanges) {
    this._getCardsNumber.getCardsNumber(this.cardsNumber);
    console.log('cucu');
  }
}
