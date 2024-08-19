<template>
  <div>
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="board__row">
      <div
        v-for="(col, colIndex) in row"
        :key="colIndex"
        :class="[
          {
            'board__btn--disabled': !!col,
            'board__btn--blue': col === Player.ONE,
            'board__btn--yellow': col === Player.TWO,
          },
          'board__btn',
        ]"
        @click="!col && emits('click', { rowIndex, colIndex })"
      >
        {{ col }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Player } from "@/types/Player";
import type { Board } from "@/types/Board";
import type { Step } from "@/types/Step";

interface Props {
  board: Board;
}

interface Emits {
  (e: "click", step: Step): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<style lang="scss" scoped>
.board {
  &__row {
    display: flex;
  }

  &__btn {
    width: 100px;
    height: 100px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    font-size: 80px;

    &--disabled {
      cursor: auto;
    }

    &--blue {
      color: aqua;
    }

    &--yellow {
      color: bisque;
    }
  }
}
</style>
