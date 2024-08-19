<template>
  <div>
    <GameOver v-if="winner" :winner="winner" @click="restart" />
    <Player :player="player" />
    <Board :board="board" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});

onBeforeMount(() => {
  console.log("onBeforeMount");
});

console.log("RUN");

onMounted(() => {
  console.log("onMounted");
});

const { player, board, handleClick, restart, checkWinner } = useGame();

const { data: winner, error } = await checkWinner(board);

watch(() => error.value, () => {
  throw createError({
    message: error.value?.message
  });
})
</script>
