<script setup lang="ts">
import Swiper from 'swiper';
import 'swiper/css';

//
const { maxWidthIniSlider = '768px' } = defineProps<{
  maxWidthIniSlider?: string;
}>();

//
const id = useId();
const swiper = ref<Swiper | null>(null);

//
onMounted(() => {
  swiper.value = new Swiper(`.swiper-${id}`, {
    init: false,
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      577: {
        spaceBetween: 20,
      },
    },
  });

  /*  */
  if (window.matchMedia(`(max-width: ${maxWidthIniSlider})`).matches) {
    swiper.value.init();
  }
});

onUnmounted(() => {
  if (swiper.value && swiper.value.destroyed) {
    swiper.value.destroy(true, false);
    swiper.value = null;
  }
});
</script>

<template>
  <div :class="['swiper', `swiper-${id}`]">
    <div class="swiper-wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
.swiper {
  /* media */
  @media (max-width: 768px) {
    padding: 0 30px;
    margin: 0 -30px;
  }

  @media (max-width: 576px) {
    padding: 0 15px;
    margin: 0 -15px;
  }
}
</style>
