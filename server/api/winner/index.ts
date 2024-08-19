import { getWinner, isDraw } from "@/config/utility";

import type { Board } from "@/types/Board";
import { DRAW } from "@/config/const";

const getResponse = (board: Board) => {
  // throw createError({
  //   statusCode: 500,
  //   statusMessage: 'Server error',
  // });
  const winner = getWinner(board);
  if (winner) return { winner };
  if (isDraw(board)) return { winner: DRAW };
  return { winner: null };
};

export default defineEventHandler(async (event) =>
  getResponse(await readBody(event)),
);
