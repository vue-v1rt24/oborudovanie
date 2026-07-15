<script setup lang="ts">
import type { Product } from '~/types/product.type';

//
const products = [
  {
    id: '1',
    plashkaText: 'В наличии',
    imagePath: '/img/products/p-1.jpg',
    countText: 'В наличии · 4 шт.',
    title: 'Карусельный станок ручной M&R Sportsman, 4 цвета / 4 стола',
    price: 'от 120 000 ₽',
  },
  {
    id: '2',
    plashkaText: 'Под заказ',
    imagePath: '/img/products/p-2.jpg',
    countText: 'В наличии · 4 шт.',
    title: 'Овальный станок автоматический ROQ Next, 12 цветов / 12 палет',
    price: 'Цена по запросу',
  },
  {
    id: '3',
    plashkaText: 'В наличии',
    imagePath: '/img/products/p-3.jpg',
    countText: 'В наличии · 6 шт.',
    title: 'Туннельная сушилка Vastex EconoRed, 60см.',
    price: 'от 80 000 ₽',
  },
  {
    id: '4',
    plashkaText: 'В наличии',
    imagePath: '/img/products/p-1.jpg',
    countText: 'В наличии · 4 шт.',
    title: 'Карусельный станок ручной M&R Sportsman, 4 цвета / 4 стола',
    price: 'от 120 000 ₽',
  },
  {
    id: '5',
    plashkaText: 'Под заказ',
    imagePath: '/img/products/p-2.jpg',
    countText: 'В наличии · 4 шт.',
    title: 'Овальный станок автоматический ROQ Next, 12 цветов / 12 палет',
    price: 'Цена по запросу',
  },
  {
    id: '6',
    plashkaText: 'В наличии',
    imagePath: '/img/products/p-3.jpg',
    countText: 'В наличии · 6 шт.',
    title: 'Туннельная сушилка Vastex EconoRed, 60см.',
    price: 'от 80 000 ₽',
  },
];

//
const modalProduct = useTemplateRef('modalProduct');
const productSingle = ref<Product | null>();

const openModal = (product: Product) => {
  productSingle.value = product;
  modalProduct.value?.openModal();
};
</script>

<template>
  <section class="about_wrap">
    <UiPageHeader title="Оборудование и расходные материалы">
      <UiBreadCrumbs :links="[{ title: 'Каталог' }]" />
    </UiPageHeader>

    <div class="container">
      <div class="products">
        <div v-for="product in products" :key="product.id">
          <UiCartProduct :product @product="openModal" />
        </div>
      </div>

      <!--  -->
      <UiButton title="Показать ещё" view="transparent" class="more">
        <span>12</span>
      </UiButton>
    </div>

    <!--  -->
    <UiProductModal :product="productSingle" ref="modalProduct" />
  </section>
</template>

<style lang="css" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  /* media */
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

/*  */
.more {
  width: 213px;
  border: 1px solid var(--border);
  margin: 0 auto;

  /* span */
  span {
    width: 38px;
    height: 38px;
    background-color: var(--bg-secondary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
