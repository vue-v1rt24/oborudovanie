<script setup lang="ts">
const munus = [
  {
    id: '1',
    title: 'Каталог',
    links: [
      { title: 'Овальные станки', link: '#' },
      { title: 'Карусельные станки', link: '#' },
      { title: 'Cушилки', link: '#' },
      { title: 'Расходники', link: '#' },
      { title: 'Краски', link: '#' },
    ],
  },
  {
    id: '2',
    title: 'Услуги',
    links: [
      { title: 'Шелкография', link: '#' },
      { title: 'DTF печать', link: '#' },
      { title: 'Вышивка', link: '#' },
      { title: 'Пошив', link: '#' },
    ],
  },
  {
    id: '3',
    title: 'Компания',
    links: [
      { title: 'Наши работы', link: '#' },
      { title: 'Отзывы', link: '#' },
      { title: 'Награды', link: '#' },
    ],
  },
  {
    id: '4',
    title: 'Помощь',
    links: [
      { title: 'Условия оплаты', link: '#' },
      { title: 'Доставка', link: '#' },
      { title: 'Гарантия', link: '#' },
      { title: 'Контакты', link: '#' },
    ],
  },
];
</script>

<template>
  <nav>
    <ul class="menu">
      <li v-for="{ id, title, links } in munus" :key="id">
        <div class="menu__title">{{ title }}</div>

        <ul class="menu__sub">
          <li v-for="{ title, link } in links" :key="title">
            <NuxtLink :to="link">
              {{ title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.menu {
  display: grid;
  grid-template-columns: repeat(4, 183px);

  /* media */
  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.menu__title {
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;

  /* media */
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

/*  */
.menu__sub {
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding-right: 28px;
}
</style>
