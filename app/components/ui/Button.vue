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
  color: var(--bg-primary);
  background: var(--cta);
  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;

  transition: background-color var(--transition);

  /* hover */
  &:hover {
    background-color: #cf3848;
  }

  /* .transparent */
  &.transparent {
    color: var(--text-primary);
    background-color: transparent;

    /* hover */
    &:hover {
      background-color: #f7f7f7;
    }
  }
}
</style>
