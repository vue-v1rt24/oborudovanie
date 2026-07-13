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
      <template v-for="menu in munus" :key="menu.id">
        <FooterMenuItem :menu />
      </template>
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

  @media (max-width: 576px) {
    display: block;
    padding: 0 30px;
  }
}
</style>
