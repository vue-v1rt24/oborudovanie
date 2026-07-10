<script setup lang="ts">
const isAnimated = ref(false);

const animatedHandler = () => {
  if (!isAnimated.value) {
    isAnimated.value = true;

    setTimeout(() => {
      isAnimated.value = false;
    }, 500);
  }
};
</script>

<template>
  <section class="about_wrap">
    <div class="container">
      <div class="about">
        <h2 class="h2">О компании UzCotton</h2>

        <!--  -->
        <div class="about__desc">
          <p>
            <span>UzCotton</span> — официальный дистрибьютор оборудования для трафаретной печати на
            текстиле. Работаем с производствами по всей России с 2003 года.
          </p>

          <p>
            Поставляем овальные и карусельные станки, туннельные и промежуточные сушилки,
            оборудование для подготовки форм и весь спектр расходных материалов. Оказываем сервисную
            поддержку и проводим обучение специалистов.
          </p>

          <NuxtLink @mouseenter="animatedHandler" to="#" class="about__link">
            <span>Подробнее</span>
            <span>
              <SvgArrowSmall :class="{ animate: isAnimated }" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="about__count_wrap">
      <div class="container">
        <ul class="about__count">
          <li>
            <span class="about__count_num">20 +</span>
            <span class="about__count_title">лет на рынке</span>
          </li>
          <li>
            <span class="about__count_num">1 000 +</span>
            <span class="about__count_title">клиентов по России</span>
          </li>
          <li>
            <span class="about__count_num">500 +</span>
            <span class="about__count_title">позиций в каталоге</span>
          </li>
          <li>
            <span class="about__count_num">12</span>
            <span class="about__count_title">брендов-производителей</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.about_wrap {
  background-color: var(--bg-primary);
  border-radius: 60px 60px 0 0;
  margin-top: -52px;

  /* media */
  @media (max-width: 576px) {
    border-radius: 20px 20px 0 0;
    margin-top: -18px;
  }
}

/*  */
.about {
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  padding: 80px 0;

  /* media */
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 32px;
  }

  @media (max-width: 576px) {
    padding: 48px 0;
  }

  /* .h2 */
  .h2 {
    flex-shrink: 0;

    /* media */
    @media (max-width: 1100px) {
      width: 260px;
    }

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 576px) {
    }
  }
}

/*  */
.about__desc {
  width: 558px;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  /* media */
  @media (max-width: 768px) {
    width: auto;
    font-size: 16px;
  }

  /* span */
  span {
    font-weight: 700;
  }
}

/*  */
.about__link {
  width: fit-content;
  font-weight: 500;
  font-size: 18px;
  border-bottom: 1px solid var(--text-secondary);
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding-bottom: 5px;

  /* svg */
  svg {
    /* .animate */
    &.animate {
      animation: sdvig 0.5s alternate forwards;
    }
  }
}

@keyframes sdvig {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

/*  */

.about__count_wrap {
  border-top: 1px solid #d1d9e0;
  padding: 44px 0;

  /* media */
  @media (max-width: 576px) {
    padding: 40px 0;
  }
}

.about__count {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  /* media */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 48px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }

  /* li */
  li {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    padding-left: calc(335px / 4);

    /*  */
    &:not(:last-child) {
      border-right: 1px solid #d1d9e0;
    }

    /* media */
    @media (max-width: 1200px) {
      padding-left: calc(335px / 6);

      /*  */
      &:nth-child(2) {
        border-right: 0;
      }
    }

    @media (max-width: 576px) {
      border-right: 0 !important;
      padding-left: 0;
      align-items: center;
    }
  }
}

/*  */
.about__count_num {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 44px;
}

.about__count_title {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
}
</style>
