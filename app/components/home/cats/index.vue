<script setup lang="ts">
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
];
</script>

<!--  -->

<template>
  <section class="cats_wrap">
    <div class="container">
      <UiArticleTitle heading="Категории оборудования" title="Весь каталог" link="#" />

      <!-- Категории -->
      <div class="cats">
        <UiSlider>
          <div class="swiper-slide">
            <div class="cat">
              <NuxtLink to="#">
                <div class="cat__img">
                  <SvgCatsShelcografiya />
                </div>

                <div class="cat__text">
                  <div class="cat__text_title">Шелкография</div>
                  <div class="cat__text_desc">12 моделей</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!--  -->
          <div class="swiper-slide">
            <div class="cat">
              <NuxtLink to="#">
                <div class="cat__img">
                  <SvgCatsVishivalnoe />
                </div>

                <div class="cat__text">
                  <div class="cat__text_title">Вышивальное оборудование</div>
                  <div class="cat__text_desc">18 моделей</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!--  -->
          <div class="swiper-slide">
            <div class="cat">
              <NuxtLink to="#">
                <div class="cat__img">
                  <SvgCatsTermoPress />
                </div>

                <div class="cat__text">
                  <div class="cat__text_title">ТЕРМО пресс</div>
                  <div class="cat__text_desc">8 моделей</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!--  -->
          <div class="swiper-slide">
            <div class="cat">
              <NuxtLink to="#">
                <div class="cat__img">
                  <SvgCatsDTF />
                </div>

                <div class="cat__text">
                  <div class="cat__text_title">DTF/UFDTF</div>
                  <div class="cat__text_desc">8 моделей</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!--  -->
          <div class="swiper-slide">
            <div class="cat">
              <NuxtLink to="#">
                <div class="cat__img">
                  <SvgCatsSkladnoe />
                </div>

                <div class="cat__text">
                  <div class="cat__text_title">Складывательное оборудование</div>
                  <div class="cat__text_desc">8 моделей</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!--  -->
          <div class="swiper-slide">
            <div class="cat">
              <NuxtLink to="#">
                <div class="cat__img">
                  <SvgCatsRashodnoe />
                </div>

                <div class="cat__text">
                  <div class="cat__text_title">Расходные материалы</div>
                  <div class="cat__text_desc">8 моделей</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </UiSlider>
      </div>

      <!-- Популярные позиции -->
      <div class="popular">
        <h2 class="h2">Популярные позиции</h2>

        <!--  -->
        <div class="products">
          <UiSlider>
            <div v-for="product in products" :key="product.id" class="swiper-slide">
              <UiCartProduct :product />
            </div>
          </UiSlider>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.cats_wrap {
  background-color: var(--bg-primary);
  border-radius: 60px 60px 0 0;
  padding: 80px 0 40px 0;
  margin-top: -60px;

  /* media */
  @media (max-width: 576px) {
    border-radius: 20px 20px 0 0;
    padding: 50px 0 30px 0;
    margin-top: -30px;
  }
}

/*  */

.cats {
  margin-top: 30px;

  /* Компонент слайдера */
  :deep(.swiper-wrapper) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    /* media */
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      display: flex;
      gap: 0;
    }
  }

  /* .swiper-slide */
  .swiper-slide {
    @media (max-width: 768px) {
      width: 400px;
    }
  }
}

.cat {
  position: relative;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1.2px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  transition: background-color var(--transition);

  /* hover */
  &:hover {
    background-color: var(--highlight-bg);
  }
}

.cat__img {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  mix-blend-mode: multiply;
}

/*  */
.cat__text {
  position: relative;
  max-width: 300px;
  z-index: 1;
}

.cat__text_title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 12px;
}

.cat__text_desc {
  font-family: var(--font-family);
}

/* Популярные позиции */
.popular {
  border-top: 1px solid var(--border);
  padding-top: 30px;
  margin-top: 30px;
}

/*  */
.products {
  margin-top: 30px;

  /* Компонент слайдера */
  :deep(.swiper-wrapper) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;

    /* media */
    @media (max-width: 768px) {
      display: flex;
      column-gap: 0;
    }
  }
}

.swiper-slide {
  /* media */
  @media (max-width: 768px) {
    width: 340px;
  }
}
</style>
