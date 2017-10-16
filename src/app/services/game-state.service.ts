import { Injectable } from '@angular/core';
// the state of the game -> disabled = false [default]
// means the menu input fields are not disabled -> user can still modify input / game has not started
// in menu component, clicking the start button [after passing the validation] will change the state of the game
// all children components of menu listen to this value.
// gets switched back to false on click of restart button
@Injectable()
export class GameStateService {
  disabled = false;
  constructor() { }
  startGame () {
    this.disabled = true;
  }
}
