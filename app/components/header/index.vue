<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="header_wrap">
    <div class="container">
      <div class="header">
        <div class="logo">
          <SvgLogo v-if="route.path === '/'" />

          <NuxtLink v-else to="/">
            <SvgLogo />
          </NuxtLink>
        </div>

        <!-- Меню -->
        <HeaderMenu />

        <!-- Поиск -->
        <HeaderSearch />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  align-items: center;
  column-gap: 80px;
  padding: 16px 0;
}
</style>
