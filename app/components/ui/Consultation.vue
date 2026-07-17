<script setup lang="ts">
const isAnimated = ref(false);

const animateHandler = () => {
  if (!isAnimated.value) {
    isAnimated.value = true;

    setTimeout(() => (isAnimated.value = false), 500);
  }
};

// Получить консультацию
const formMessage = useTemplateRef('formMessage');

const formMessageOpen = () => {
  formMessage.value?.openModal();
};
</script>

<template>
  <section class="consultation_wrap">
    <div class="container">
      <div class="consultation">
        <div class="consultation__left">
          <div class="consultation__title">Подберём оборудование под ваши задачи</div>

          <p class="consultation__desc">
            Расскажите о своём производстве — менеджер свяжется в течение 30 минут и предложит
            оптимальное решение
          </p>
        </div>

        <!--  -->
        <div class="consultation__right">
          <UiButton title="Получить консультацию" @click-btn="formMessageOpen" />

          <UiButton
            @mouseenter="animateHandler"
            title="Скачать каталог PDF"
            view="transparent"
            class="pdf"
          >
            <SvgDownload :class="{ animate: isAnimated }" />
          </UiButton>
        </div>
      </div>
    </div>

    <!-- Форма написания сообщения -->
    <Teleport to="body">
      <UiNapisatSoobshenieForm ref="formMessage" />
    </Teleport>
  </section>
</template>

<style lang="css" scoped>
.consultation_wrap {
  background-color: var(--highlight-bg);
  padding: 64px 0;

  /* media */
  @media (max-width: 576px) {
    padding: 32px 0;
  }
}

/*  */
.consultation {
  display: flex;
  justify-content: space-between;
  column-gap: 30px;

  /* media */
  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 30px;
  }
}

/*  */
.consultation__left {
  max-width: 594px;
}

.consultation__title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 12px;
}

.consultation__desc {
  /* media */
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

/*  */

.consultation__right {
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  /*  */
  .btn {
    width: 255px;

    /* media */
    @media (max-width: 576px) {
      width: 100%;
    }

    /* .pdf */
    &.pdf {
      border: 1px solid var(--border);

      /* svg */
      svg {
        /* .animate */
        &.animate {
          animation: sdvig 0.5s forwards;
        }
      }
    }
  }
}

@keyframes sdvig {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
