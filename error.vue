<script setup>
const error = useError();

const goBack = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <NuxtLayout>
    <div class="error">
      <h2>Something went wrong!</h2>
      <h3 v-if="error?.statusCode">{{ error.statusCode }}</h3>
      <code>{{ error }}</code>
      <div>
        <button class="error__btn" @click="goBack()">Go back</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error {
  text-align: center;
  margin: 50% auto;

  &__btn {
    margin-top: 20px;
  }
}
</style>
