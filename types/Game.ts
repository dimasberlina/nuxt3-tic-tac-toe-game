import type { Board } from "./Board";
import type { Player } from "./Player";

export interface Game {
  player: Player;
  board: Board;
}
