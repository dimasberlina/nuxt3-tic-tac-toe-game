import type { Board } from "@/types/Board";

export const initBoard = (board: Board) => JSON.parse(JSON.stringify(board));

export const isDraw = (board: Board) => board.flat().every((el) => !!el);

export const getWinner = (board: Board) => {
  if (board[0][0] && board[0][0] === board[0][1] && board[0][1] === board[0][2])
    return board[0][0];
  if (board[1][0] && board[1][0] === board[1][1] && board[1][1] === board[1][2])
    return board[1][0];
  if (board[2][0] && board[2][0] === board[2][1] && board[2][1] === board[2][2])
    return board[2][0];
  if (board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0])
    return board[0][0];
  if (board[0][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1])
    return board[0][1];
  if (board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2])
    return board[0][2];
  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2])
    return board[0][0];
  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0])
    return board[0][2];
  return null;
};
