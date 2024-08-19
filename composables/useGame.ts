import { INITIAL_BOARD } from "@/config/const";
import { initBoard } from "@/config/utility";

import { Player } from "@/types/Player";
import type { Game } from "@/types/Game";
import type { Step } from "@/types/Step";
import type { Board } from "@/types/Board";
import type { Winner, WinnerRespone } from "@/types/Winner";

const useGame = () => {
  const state = useState<Game>("gameState", () => ({
    player: Player.ONE,
    board: initBoard(INITIAL_BOARD),
  }));

  const player = computed(() => state.value.player);
  const board = computed(() => state.value.board);

  const getNextPlayer = (player: string) => {
    return player === Player.ONE ? Player.TWO : Player.ONE;
  };

  const handleClick = ({ rowIndex, colIndex }: Step) => {
    const updatedPlayer = getNextPlayer(state.value.player);
    const updatedBoard = [...state.value.board];
    updatedBoard[rowIndex][colIndex] = state.value.player;
    state.value = {
      ...state.value,
      board: [...updatedBoard],
      player: updatedPlayer,
    };
  };

  const restart = () => {
    state.value = {
      board: initBoard(INITIAL_BOARD),
      player: Player.ONE,
    };
  };

  const checkWinner = async (board: Ref<Board>) => {
    return await useFetchData<WinnerRespone, Winner>("/api/winner", {
      method: "POST",
      body: board,
      immediate: false,
      transform: (data) => data.winner,
    });
  };

  return {
    player,
    board,
    handleClick,
    restart,
    checkWinner,
  };
};
export default useGame;
