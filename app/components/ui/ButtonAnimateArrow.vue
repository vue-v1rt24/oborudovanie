<script setup lang="ts">
defineProps<{
  title: string;
}>();

//
const isAnimate = ref(false);

const animateHandler = () => {
  if (!isAnimate.value) {
    isAnimate.value = true;

    setTimeout(() => (isAnimate.value = false), 500);
  }
};
</script>

<template>
  <div @mouseenter="animateHandler" class="arrow">
    <span class="arrow__title">{{ title }}</span>

    <span>
      <SvgArrowSmall :class="{ animate: isAnimate }" />
    </span>
  </div>
</template>

<style lang="css" scoped>
.arrow {
  width: fit-content;
  font-weight: 500;
  display: flex;
  align-items: center;
  column-gap: 16px;
  border-bottom: 1px solid var(--text-secondary);
  padding-bottom: 3px;

  /* svg */
  svg {
    /* .animate */
    &.animate {
      animation: sdvig 0.5s alternate backwards;
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
</style>
