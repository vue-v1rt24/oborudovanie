<script setup lang="ts">
const { type = 'text' } = defineProps<{
  label: string;
  type?: 'text' | 'email' | 'tel';
}>();

//
const id = useId();

//
const modelValue = defineModel({ required: true });
</script>

<template>
  <label class="label">
    <span>{{ label }}</span>
    <input
      v-if="type === 'tel'"
      :type
      v-model="modelValue"
      :id
      v-maska="'+7 (###) ### ## ##'"
      placeholder="+7"
    />

    <input v-else :type v-model="modelValue" :id />
  </label>
</template>

<style lang="css" scoped>
.label {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  /* input */
  input {
    width: 100%;
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
