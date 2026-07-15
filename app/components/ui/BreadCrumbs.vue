<script setup lang="ts">
defineProps<{
  links: { title: string; link?: string }[];
}>();
</script>

<template>
  <div class="container">
    <div class="breadcrumbs">
      <NuxtLink to="/">Главная</NuxtLink>
      <span class="breadcrumbs_delimiter">
        <SvgDelimiter />
      </span>

      <template v-for="item in links" :key="item.title">
        <template v-if="item.link">
          <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
          <span class="breadcrumbs_delimiter">
            <SvgDelimiter />
          </span>
        </template>

        <span v-else>{{ item.title }}</span>
      </template>
    </div>
  </div>
</template>

<style lang="css" scoped>
.breadcrumbs {
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 18px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  column-gap: 14px;
  white-space: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  /*  */
  @media (max-width: 576px) {
    column-gap: 10px;
  }

  /*  */
  a {
    color: #959595;
    transition: color var(--transition);

    /*  */
    &:hover {
      color: var(--main-green);
    }
  }
}
</style>
