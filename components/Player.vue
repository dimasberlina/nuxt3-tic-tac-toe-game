<template>
  <div class="player">
    <label for="player"><u>player:</u></label>
    <input type="text" name="player" :value="player" disabled />
  </div>
</template>

<script setup lang="ts">
interface Props {
  player: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.player {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

input {
  text-align: center;
  width: 193px;
}
</style>
