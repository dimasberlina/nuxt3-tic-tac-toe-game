<template>
  <NuxtLayout>
    <Header />
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <div class="client-error">
          <h2>Something went wrong!</h2>
          <code>{{ error }}</code>
          <div>
            <button class="client-error__btn" @click="goBack()">Go back</button>
          </div>
        </div>
      </template>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const goBack = () => {
  location.reload();
};
</script>

<style lang="scss" scoped>
.client-error {
  text-align: center;
  margin: 50% auto;

  &__btn {
    margin-top: 20px;
  }
}
</style>
