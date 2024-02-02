import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';
// these are what is known as 'relative' imports, the compiler will look for these relative to the file you've imported it in
// non-relative imports do not reference paths, and are typically used in referencing third party modules like jquery, lodash, etc

let newGame: Game;

// add clicker to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Helpers.getValue('playername');

  const problemCount: number = Number(Helpers.getValue('problemCount'));
  const factor: number = Number(Helpers.getValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
})
