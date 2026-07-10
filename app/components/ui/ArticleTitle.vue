<script setup lang="ts">
defineProps<{
  heading: string;
  title: string;
  link: string;
}>();
</script>

<template>
  <hgroup class="services__hgroup">
    <h2 class="h2">
      {{ heading }}
    </h2>

    <NuxtLink :to="link">
      <UiButtonAnimateArrow :title />
    </NuxtLink>
  </hgroup>
</template>

<style lang="css" scoped>
.services__hgroup {
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Компонент */
  :deep(.arrow) {
    /* media */
    @media (max-width: 576px) {
      border-bottom: 0;
    }

    /* .arrow__title */
    .arrow__title {
      /* media */
      @media (max-width: 576px) {
        display: none;
      }
    }
  }
}
</style>
