<script setup lang="ts">
defineProps<{
  menu: {
    id: string;
    title: string;
    links: { title: string; link: string }[];
  };
}>();

//
const isOpen = ref(false);
</script>

<template>
  <li :class="{ menu_sub_open: isOpen }" @click="isOpen = !isOpen">
    <div class="menu__title">
      {{ menu.title }}

      <span class="menu__title_arrow">
        <SvgArrow />
      </span>
    </div>

    <div class="menu__sub_wrap">
      <ul class="menu__sub">
        <li v-for="{ title, link } in menu.links" :key="title">
          <NuxtLink :to="link">
            {{ title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </li>
</template>

<style lang="css" scoped>
.menu__title {
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;

  /* media */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.menu__title_arrow {
  display: none;
  transform: rotate(0);
  transition: transform var(--transition);

  /* media */
  @media (max-width: 576px) {
    display: block;
  }

  /*  */
  .menu_sub_open & {
    transform: rotate(90deg);
  }
}

/*  */
.menu__sub_wrap {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s;

  /* media */
  @media (max-width: 576px) {
    .menu_sub_open & {
      grid-template-rows: 1fr;
    }
  }
}

.menu__sub {
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding-right: 28px;

  /* media */
  @media (max-width: 576px) {
    min-height: 0;
    padding-right: 0;
    transition: padding-bottom var(--transition);

    /* .menu_sub_open */
    .menu_sub_open & {
      padding-bottom: 30px;
    }
  }
}
</style>
