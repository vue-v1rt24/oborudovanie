<script setup lang="ts">
const { type = 'button', view = 'red' } = defineProps<{
  title: string;
  type?: 'button' | 'submit';
  view?: 'transparent';
}>();
</script>

<template>
  <button :type :class="['btn', { transparent: view === 'transparent' }]">
    <span>{{ title }}</span>

    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<style lang="css" scoped>
.btn {
  height: 48px;
  background: var(--cta);
  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;

  /* .transparent */
  &.transparent {
    color: var(--text-primary);
    background-color: transparent;
  }
}
</style>
