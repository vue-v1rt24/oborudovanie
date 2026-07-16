<script setup lang="ts">
const route = useRoute();

const class_page = computed(() => {
  if (route.path === '/' || route.path === '/production') {
    return 'home';
  }

  return '';
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <Header />

    <main>
      <NuxtPage />
    </main>

    <Footer :class-page="class_page" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
