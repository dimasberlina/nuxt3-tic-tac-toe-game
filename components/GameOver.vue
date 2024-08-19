<template>
  <dialog open class="game-over">
    <h2 class="game-over__title">Game Over!</h2>
    <p v-if="winner !== DRAW">
      Winner:
      <strong
        :class="[
          {
            'game-over__player--blue': winner === Player.ONE,
            'game-over__player--yellow': winner === Player.TWO,
          },
          'game-over__player',
        ]"
      >
        {{ winner }}
      </strong>
    </p>
    <form method="dialog">
      <button @click="emits('click')">restart</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { DRAW } from "@/config/const";

import { Player } from "@/types/Player";

interface Props {
  winner: string;
}

interface Emits {
  (e: "click"): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<style lang="scss" scoped>
.game-over {
  width: 300px;
  height: 300px;
  text-align: center;

  &__title {
    margin-top: 100px;
  }

  &__player {
    font-size: 80px;

    &--blue {
      color: aqua;
    }

    &--yellow {
      color: bisque;
    }
  }
}
</style>
