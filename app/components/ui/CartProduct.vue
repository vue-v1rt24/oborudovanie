<script setup lang="ts">
import type { Product } from '~/types/product.type';

defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  product: [product: Product];
}>();
</script>

<template>
  <div class="product">
    <div class="product__img">
      <span v-if="product.plashkaText" class="product__img_title">{{ product.plashkaText }}</span>
      <img :src="product.imagePath" alt="" loading="lazy" />
    </div>

    <!--  -->
    <div class="product__info">
      <div class="product__info_count">
        {{ product.countText }}
      </div>

      <div class="product__info_title dots">
        {{ product.title }}
      </div>

      <div class="product__info_price">
        {{ product.price }}
      </div>

      <UiButton title="Заказать" view="transparent" @click-btn="emit('product', product)" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.product {
  border: 1.2px solid var(--border);
  border-radius: 16px;

  /* Компонент кнопки */
  :deep(.btn) {
    width: 100%;
    border: 1px solid red;
  }
}

/*  */
.product__img {
  position: relative;
  text-align: center;
}

.product__img_title {
  position: absolute;
  top: 12px;
  left: 12px;

  font-weight: 600;
  font-size: 14px;
  color: var(--brand);
  background: rgba(37, 99, 235, 0.2);
  border-radius: 12px;
  padding: 7px 8px;
}

/*  */
.product__info {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px 30px;
}

/*  */
.product__info_count {
  font-size: 14px;
}

.product__info_title {
  /* media */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.product__info_price {
  font-weight: 700;
  margin-bottom: 12px;
}
</style>
