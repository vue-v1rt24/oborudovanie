<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui/dist/fancybox/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

//
const {
  width = '600px',
  fancyboxOptions,
  mainClass = '',
  type = 'inline',
} = defineProps<{
  width?: string;
  fancyboxOptions?: Object;
  mainClass?: string;
  type?: 'inline' | 'clone';
}>();

const emit = defineEmits<{
  closeEvent: [];
}>();

//
const id = useId();

//
const open = () => {
  Fancybox.show([{ src: id, type }], {
    mainClass: `default_style ${mainClass}`,
    dragToClose: false,
    closeButtonTpl: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-fancybox-close>
<path d="M18 6L6 18" stroke="#4B5E6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#4B5E6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    on: {
      close: () => {
        emit('closeEvent');
      },
    },
  });
};

const close = () => {
  Fancybox.close();
};

//
onUnmounted(() => {
  Fancybox.unbind(id);
  Fancybox.close();
});

//
defineExpose({
  open,
  close,
});
</script>

<template>
  <div :id class="fancybox" :style="type === 'clone' ? 'display: block' : 'display: none'">
    <slot />
  </div>
</template>

<style lang="css" scoped>
.fancybox {
  max-width: v-bind(width);

  /*  */
}
</style>

<style>
.default_style {
  .f-html {
    border-radius: 20px;
    padding: 0;
  }

  /*  */
  .is-close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  .fancybox__viewport.is-draggable {
    cursor: default;
  }
}
</style>
