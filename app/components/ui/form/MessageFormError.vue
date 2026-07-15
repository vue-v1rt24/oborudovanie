<script setup lang="ts">
import { type ErrorObject } from '@vuelidate/core';

//
defineProps<{
  errors: ErrorObject[];
}>();
</script>

<template>
  <div>
    <slot />

    <ul class="error">
      <li v-for="error in errors" :key="error.$uid">
        {{ error.$message }}
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.error {
  font-size: 12px;
  color: red;
}
</style>
