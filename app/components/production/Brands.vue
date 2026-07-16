<script setup lang="ts"></script>

<template>
  <section id="brands" class="production__content">
    <h3 class="production__h3">Бренды-производители</h3>

    <!--  -->
    <div class="brands">
      <UiSlider max-width-ini-slider="750px">
        <div class="swiper-slide">
          <div class="brand">
            <div class="brand__img">
              <span class="brand__img_title">Карусельные станки</span>

              <picture>
                <source srcset="/img/brands/brand-768-1.jpg" media="(max-width: 768px)" />
                <img src="/img/brands/brand-1.jpg" alt="" loading="lazy" />
              </picture>
            </div>

            <!--  -->
            <div class="brand__text">
              <div class="brand__text_country">США · с 1985 года</div>

              <div class="brand__text_title">M&R Companies</div>

              <p class="brand__text_desc">
                Мировой лидер в производстве автоматических и ручных карусельных станков для
                трафаретной печати. Флагман отрасли.
              </p>
            </div>

            <!--  -->
            <NuxtLink to="#" class="brand__link">
              <UiButtonAnimateArrow title="Смотреть оборудование" />
            </NuxtLink>
          </div>
        </div>

        <!--  -->
        <div class="swiper-slide">
          <div class="brand">
            <div class="brand__img">
              <span class="brand__img_title">Овальные станки · Сушилки</span>

              <picture>
                <source srcset="/img/brands/brand-768-2.jpg" media="(max-width: 768px)" />
                <img src="/img/brands/brand-2.jpg" alt="" loading="lazy" />
              </picture>
            </div>

            <!--  -->
            <div class="brand__text">
              <div class="brand__text_country">Португалия · с 1986 года</div>

              <div class="brand__text_title">ROQ International</div>

              <p class="brand__text_desc">
                Производитель автоматических овальных станков и туннельных сушилок. Точность
                совмещения цветов и надёжность механики.
              </p>
            </div>

            <!--  -->
            <NuxtLink to="#" class="brand__link">
              <UiButtonAnimateArrow title="Смотреть оборудование" />
            </NuxtLink>
          </div>
        </div>

        <!--  -->
        <div class="swiper-slide">
          <div class="brand">
            <div class="brand__img">
              <span class="brand__img_title">DTF · Широкий формат</span>

              <picture>
                <source srcset="/img/brands/brand-768-3.jpg" media="(max-width: 768px)" />
                <img src="/img/brands/brand-3.jpg" alt="" loading="lazy" />
              </picture>
            </div>

            <!--  -->
            <div class="brand__text">
              <div class="brand__text_country">Япония · с 1981 года</div>

              <div class="brand__text_title">Roland DG</div>

              <p class="brand__text_desc">
                Японский производитель широкоформатных принтеров для DTF и сублимационной печати.
                Точность и долговечность японского уровня.
              </p>
            </div>

            <!--  -->
            <NuxtLink to="#" class="brand__link">
              <UiButtonAnimateArrow title="Смотреть оборудование" />
            </NuxtLink>
          </div>
        </div>

        <!--  -->
        <div class="swiper-slide">
          <div class="brand">
            <div class="brand__img">
              <span class="brand__img_title">Сетки · Ракели · Эмульсии</span>
              <picture>
                <source srcset="/img/brands/brand-768-4.jpg" media="(max-width: 768px)" />
                <img src="/img/brands/brand-4.jpg" alt="" loading="lazy" />
              </picture>
            </div>

            <!--  -->
            <div class="brand__text">
              <div class="brand__text_country">Италия · с 1935 года</div>

              <div class="brand__text_title">SAATI Group</div>

              <p class="brand__text_desc">
                Старейший производитель печатных сеток, ракелей и фотоэмульсий. Эталонное качество
                расходных материалов для шелкографии.
              </p>
            </div>

            <!--  -->
            <NuxtLink to="#" class="brand__link">
              <UiButtonAnimateArrow title="Смотреть оборудование" />
            </NuxtLink>
          </div>
        </div>
      </UiSlider>
    </div>
  </section>
</template>

<style lang="css" scoped>
.production__h3 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 24px;
}

/*  */

.brands {
  /* .swiper-wrapper */
  :deep(.swiper-wrapper) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    border-bottom: 1px solid var(--border);
    padding-bottom: 30px;
    margin-bottom: 30px;

    /* medid */
    @media (max-width: 750px) {
      display: flex;
      gap: 0;
    }

    @media (max-width: 576px) {
      margin-bottom: 24px;
    }
  }

  /* .swiper-slide */
  .swiper-slide {
    /* media */
    @media (max-width: 750px) {
      width: 300px;
      height: stretch;
    }
  }
}

/*  */
.brand {
  height: stretch;
  border: 1px solid var(--border);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  overflow: hidden;
}

/*  */
.brand__img {
  position: relative;
}

.brand__img_title {
  position: absolute;
  top: 12px;
  left: 12px;
  width: fit-content;
  height: 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  color: var(--brand);
  background-color: #d2dffa;
  border-radius: 12px;
  padding: 4px 8px;
  z-index: 1;
}

/*  */
.brand__text {
  padding: 20px 32px 0 32px;

  /* media */
  @media (max-width: 768px) {
    padding: 4px 16px 0 16px;
  }
}

.brand__text_country {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.brand__text_title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
}

.brand__text_desc {
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.01em;
  color: var(--text-primary);
  margin: 4px 0 12px 0;
}

/*  */
.brand__link {
  padding: 0 32px;
  margin-top: auto;

  /* media */
  @media (max-width: 768px) {
    padding: 0 16px;
  }
}
</style>
