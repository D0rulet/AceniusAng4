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
import { GameLogicService } from './services/game-logic.service';
import { PlayersService } from './services/players.service';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { GameStateService } from './services/game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    PlayerNameComponent,
    GetCardsComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  // make all services available to all components
  providers: [GetCardsService, ManageCardsService, GameLogicService, PlayersService, GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
