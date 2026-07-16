<script setup lang="ts">
import { type ErrorObject } from '@vuelidate/core';

//
defineProps<{
  errors: ErrorObject[];
}>();
</script>

<template>
  <div class="field">
    <slot />

    <ul class="error">
      <li v-for="error in errors" :key="error.$uid">
        {{ error.$message }}
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.field {
  position: relative;
}

/*  */
.error {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  color: red;
}
</style>
