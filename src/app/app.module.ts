import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { GetCardsService } from './services/get-cards.service';
import { PlayerNameComponent } from './player-name/player-name.component';
import { GetCardsComponent } from './get-cards/get-cards.component';
import { ManageCardsService } from './services/manage-cards.service';
import { PlayerComponent } from './player/player.component';
import { GameLogicService } from './services/game-logic.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    PlayerNameComponent,
    GetCardsComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetCardsService, ManageCardsService, GameLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
