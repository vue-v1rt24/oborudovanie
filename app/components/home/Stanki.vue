<script setup lang="ts">
const isAnimated = ref(false);

const handleMouseEnter = () => {
  if (!isAnimated.value) {
    isAnimated.value = true;

    setTimeout(() => {
      isAnimated.value = false;
    }, 500);
  }
};

// Получить консультацию
const formMessage = useTemplateRef('formMessage');

const formMessageOpen = () => {
  formMessage.value?.openModal();
};
</script>

<template>
  <div class="stanki_wrap">
    <div class="container">
      <div class="stanki">
        <div class="stanki__top_title">Оборудование для текстильной печати</div>

        <!--  -->
        <h1 class="stanki__h1">Овальные промышленные станки печати</h1>

        <!--  -->
        <UiButton
          title="Получить консультацию"
          class="btn_arrow_long"
          @mouseenter="handleMouseEnter"
          @click-btn="formMessageOpen"
        >
          <SvgArrowLong :class="{ animated: isAnimated }" />
        </UiButton>

        <!--  -->
        <div class="stanki__desc">
          <span class="stanki__desc_title">UzCotton Equipment</span>
          <span>Лучшее оборудование для производства</span>
        </div>
      </div>
    </div>

    <!-- Форма написания сообщения -->
    <Teleport to="body">
      <UiNapisatSoobshenieForm title="Получить консультацию" ref="formMessage" />
    </Teleport>
  </div>
</template>

<style lang="css" scoped>
.stanki_wrap {
  background-color: #c8dbf1;
  background-image: url(/img/home/stanok-oval.png);
  background-repeat: no-repeat;
  background-position: calc(50% + 365px) 50px;
  padding: 140px 0 80px 0;

  /* media */
  @media (max-width: 1250px) {
    background-size: 630px;
    background-position-y: center;
  }

  @media (max-width: 768px) {
    background-size: 560px;
    background-position-x: calc(50% + 310px);
    padding: 110px 0;
  }

  @media (max-width: 700px) {
    background-position-x: calc(50% + 400px);
  }

  @media (max-width: 576px) {
    background-position-y: calc(100% - 89px);
    background-size: 240px;
    background-position-x: calc(50% + 80px);
    padding: 48px 0;
  }
}

/*  */
.stanki__top_title {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  /* media */
  @media (max-width: 576px) {
    font-size: 14px;
  }
}

/*  */
.stanki__h1 {
  max-width: 440px;
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 56px;
  margin: 12px 0 60px 0;

  /* media */
  @media (max-width: 992px) {
    font-size: 44px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    margin: 12px 0 32px 0;
  }
}

/* Кнопка */
.btn_arrow_long {
  width: 321px;
  font-weight: 500;

  /*  */
  svg {
    &.animated {
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
.stanki__desc {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 110px;

  /* media */
  @media (max-width: 576px) {
    margin-top: 198px;
  }
}

.stanki__desc_title {
  font-weight: 600;
}
</style>
