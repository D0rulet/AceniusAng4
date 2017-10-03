import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';
import { GetCardsService } from '../get-cards-service/get-cards.service';
import 'rxjs/add/operator/map';
import { ManageCardsService } from '../manage-cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() cardListUrl;
  finalCardList = [];
  errorMessage;
  @Input() buttonClicked = true;

  constructor(private _getCardsData: GetCardsService, private _manageCardsService: ManageCardsService) { }

  initz() {
    this._getCardsData.getCards()
      .subscribe(data => {
        this.cardListUrl = data.item.map(card => card.image);
        this.finalCardList = this._manageCardsService.createFinalCardList(this.cardListUrl);
        console.log(this.finalCardList);
    },
      error => this.errorMessage = <any>error);
  }
}
