import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { GetCardsService } from './get-cards-service/get-cards.service';
import { PlayerNameComponent } from './player-name/player-name.component';
import { GetCardsComponent } from './get-cards/get-cards.component';
import { CardsNumberComponent } from './cards-number/cards-number.component';
import { ManageCardsService } from './manage-cards.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    MenuComponent,
    PlayerNameComponent,
    GetCardsComponent,
    CardsNumberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetCardsService, ManageCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
