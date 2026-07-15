<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, helpers } from '@vuelidate/validators';

import type { Product } from '~/types/product.type';

//
defineProps<{
  product: Product | null | undefined;
}>();

//
const modal = useTemplateRef('modal');

const openModal = () => {
  modal.value?.open();
};

defineExpose({
  openModal,
});

// Поля формы
const fields = reactive({
  name: '',
  tel: '',
  politica: 'да',
});

// Правила валидации
const rules = {
  name: {
    required: helpers.withMessage('Введите имя', required),
    minLength: helpers.withMessage('Имя должно содержать не менее 2 символов', minLength(2)),
  },
  tel: {
    required: helpers.withMessage('Введите нормер телефона', required),
    minLength: helpers.withMessage('Введите полный номер телефона', minLength(18)),
  },
  politica: { required: helpers.withMessage('Примите соглашение', required) },
};

const v$ = useVuelidate(rules, fields);

// Отправка формы
const submitHandler = async () => {
  const result = await v$.value.$validate();
  if (!result) return;

  console.log(fields);
};

// Очистка полей
const clearFields = () => {
  fields.name = '';
  fields.tel = '';
  fields.politica = 'да';

  v$.value.$reset();
};
</script>

<template>
  <UiModal ref="modal" @close-event="clearFields">
    <div class="product">
      <div class="product__modal_title">Заявка на оборудование</div>

      <div class="product__info">
        <div class="product__img">
          <img :src="product?.imagePath" alt="" />
        </div>

        <!--  -->
        <div class="product__title_price">
          <div class="product__title">{{ product?.title }}</div>
          <div class="product__price">{{ product?.price }}</div>
        </div>
      </div>

      <!--  -->
      <ul class="product__info_list">
        <li>✓ Уточним наличие и сроки поставки</li>
        <li>✓ Подберём комплектацию под ваши задачи</li>
        <li>✓ Ответим в течение рабочего дня</li>
      </ul>

      <!--  -->
      <form @submit.prevent="submitHandler" class="product__form">
        <UiFormMessageFormError :errors="v$.name.$errors">
          <UiFormInput label="Ваше имя" v-model="fields.name" />
        </UiFormMessageFormError>

        <UiFormMessageFormError :errors="v$.tel.$errors">
          <UiFormInput label="Ваш номер телефона" type="tel" v-model="fields.tel" />
        </UiFormMessageFormError>

        <!--  -->
        <UiFormMessageFormError :errors="v$.politica.$errors">
          <label class="personal">
            <input type="checkbox" v-model="fields.politica" true-value="да" false-value="" />
            <span>Согласен на обработку персональных данных</span>
          </label>
        </UiFormMessageFormError>

        <!--  -->
        <UiButton title="Отправить заявку" type="submit" />
      </form>
    </div>
  </UiModal>
</template>

<style lang="css" scoped>
.product {
  background-color: var(--bg-primary);
  box-shadow: 0 18px 30px 0 rgba(51, 51, 51, 0.64);
  border-radius: 24px;
  padding: 24px 24px 16px;
}

/*  */
.product__modal_title {
  font-weight: 700;
  border-bottom: 1px solid var(--border);
  padding-bottom: 16px;
  margin-bottom: 16px;
}

/*  */
.product__info {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

/*  */
.product__img {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
}

/*  */
.product__title_price {
}

.product__title {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.product__price {
  color: var(--text-secondary);
}

/*  */
.product__info_list {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  background-color: var(--bg-secondary);
  border-radius: 16px;
  padding: 16px 12px;
}

/*  */
.product__form {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 16px;
}

/*  */
.personal {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 13px;
  line-height: 123%;
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;

  /*  */
  input {
    position: relative;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: #f4f4f4;
    border-radius: 24px;

    /* before */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 50%;
      opacity: 0;
      transition: 0.5s;
    }

    /* checked */
    &:checked::before {
      opacity: 1;
    }
  }
}
</style>
