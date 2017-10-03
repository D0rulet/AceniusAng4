import { Component, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-get-cards',
  templateUrl: './get-cards.component.html',
  styleUrls: ['./get-cards.component.css']
})
export class GetCardsComponent implements OnChanges {
  pinterestUser;
  pinterestBoard;
  changeLog;
  @Output() sendPinterestData = new EventEmitter<Object>();

  sendPinData () {
    this.sendPinterestData.emit({user: this.pinterestUser, board: this.pinterestBoard});
  }
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
