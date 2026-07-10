<script setup lang="ts"></script>

<template>
  <section class="services_wrap">
    <div class="container">
      <UiArticleTitle heading="Наши услуги" title="Смотреть все" link="#" />

      <div class="services">
        <NuxtLink to="#">
          <article class="service">
            <picture>
              <source srcset="/img/home/services/service-1-mob.jpg" media="(max-width: 576px)" />
              <img src="/img/home/services/service-1.jpg" alt="" />
            </picture>

            <!--  -->
            <div class="service__text">
              <div class="service__text_title">Ремонт оборудования</div>

              <p class="service__text_desc">
                Диагностика и восстановление станков, печей и спецоборудования. Оригинальные
                запчасти.
              </p>
            </div>

            <!--  -->
            <div class="service__arrow">
              <SvgArrowCircle />
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="#">
          <article class="service">
            <picture>
              <source srcset="/img/home/services/service-2-mob.jpg" media="(max-width: 576px)" />
              <img src="/img/home/services/service-2.jpg" alt="" />
            </picture>

            <!--  -->
            <div class="service__text">
              <div class="service__text_title">Подготовка печатных форм</div>

              <p class="service__text_desc">
                Полноцветная печать без ограничений по цветам и тиражам, без предоплаты плёнки.
              </p>
            </div>

            <!--  -->
            <div class="service__arrow">
              <SvgArrowCircle />
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="#">
          <article class="service">
            <picture>
              <source srcset="/img/home/services/service-3-mob.jpg" media="(max-width: 576px)" />
              <img src="/img/home/services/service-3.jpg" alt="" />
            </picture>

            <!--  -->
            <div class="service__text">
              <div class="service__text_title">Пусконаладочные работы</div>

              <p class="service__text_desc">
                Монтаж, подключение и запуск оборудования на производстве заказчика. Выезд
                специалиста по России.
              </p>
            </div>

            <!--  -->
            <div class="service__arrow">
              <SvgArrowCircle />
            </div>
          </article>
        </NuxtLink>

        <NuxtLink to="#">
          <article class="service">
            <picture>
              <source srcset="/img/home/services/service-4-mob.jpg" media="(max-width: 576px)" />
              <img src="/img/home/services/service-4.jpg" alt="" />
            </picture>

            <!--  -->
            <div class="service__text">
              <div class="service__text_title">Натяжка сит</div>

              <p class="service__text_desc">
                Профессиональная натяжка полиэфирных и металлических сеток на алюминиевые и
                деревянные рамы.
              </p>
            </div>

            <!--  -->
            <div class="service__arrow">
              <SvgArrowCircle />
            </div>
          </article>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.services_wrap {
  background-color: var(--bg-secondary);
  border-radius: 60px 60px 0 0;
  padding: 80px 0 120px 0;

  /* media */
  @media (max-width: 576px) {
    border-radius: 20px 20px 0 0;
    padding: 55px 0 80px 0;
  }
}

/*  */

.services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;

  /* media */
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

.service {
  position: relative;
  width: fit-content;

  /* img */
  img {
    border-radius: 16px;
  }
}

.service__text {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 24px;
}

.service__text_title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  color: var(--bg-primary);
  margin-bottom: 12px;
}

.service__text_desc {
  max-width: 430px;
  font-family: var(--font-family);
  color: var(--bg-secondary);

  /* media */
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

/*  */
.service__arrow {
  position: absolute;
  top: 24px;
  right: 24px;
  opacity: 0;
  transition: opacity var(--transition);

  /* .service */
  .service:hover & {
    opacity: 1;
  }
}
</style>
