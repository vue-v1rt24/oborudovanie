<script setup lang="ts">
const { height = '100px' } = defineProps<{
  label: string;
  height?: string;
}>();

//
const id = useId();

//
const modelValue = defineModel<string>({ required: true });
</script>

<template>
  <label class="label">
    <span>{{ label }}</span>

    <textarea v-model="modelValue" :id></textarea>
  </label>
</template>

<style lang="css" scoped>
.label {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  /* textarea */
  textarea {
    width: 100%;
    height: v-bind(height);
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 13px;
    color: rgba(27, 31, 59, 0.65);
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    background-color: var(--bg-primary);
    padding: 12px 16px;
    transition: box-shadow var(--transition);

    /* focus */
    &:focus {
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
