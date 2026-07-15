<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="page_header">
    <slot />

    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<style lang="css" scoped>
.page_header {
  background-color: var(--bg-secondary);
  padding: 80px 0;
  margin-bottom: 40px;

  /* media */
  @media (max-width: 576px) {
    padding: 50px 0;
  }

  /* h1 */
  h1 {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 28px;
    color: var(--text-primary);
    margin-top: 20px;
  }
}
</style>
