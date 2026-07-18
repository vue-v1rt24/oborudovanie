<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, email, helpers } from '@vuelidate/validators';

//
defineProps<{
  title: string;
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
  email: '',
  message: '',
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
  email: {
    required: helpers.withMessage('Введите почту', required),
    email: helpers.withMessage('Введите правильную почту', email),
  },
  message: {
    required: helpers.withMessage('Введите вопрос', required),
    minLength: helpers.withMessage('Не менее 20 символов', minLength(20)),
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
  fields.email = '';
  fields.message = '';
  fields.politica = 'да';

  v$.value.$reset();
};
</script>

<template>
  <UiModal ref="modal" @close-event="clearFields">
    <form @submit.prevent="submitHandler" class="product__form">
      <div class="product__form__title">
        {{ title }}
      </div>

      <!--  -->
      <UiFormMessageFormError :errors="v$.name.$errors">
        <UiFormInput label="Ваше имя" v-model="fields.name" />
      </UiFormMessageFormError>

      <UiFormMessageFormError :errors="v$.tel.$errors">
        <UiFormInput label="Телефон" type="tel" v-model="fields.tel" />
      </UiFormMessageFormError>

      <UiFormMessageFormError :errors="v$.email.$errors">
        <UiFormInput label="Почта" v-model="fields.email" />
      </UiFormMessageFormError>

      <UiFormMessageFormError :errors="v$.message.$errors">
        <UiFormTextarea label="Сообщение" v-model="fields.message" />
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
  </UiModal>
</template>

<style lang="css" scoped>
.product__form {
  width: 600px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 60px 30px 30px 30px;

  /* media */
  @media (max-width: 650px) {
    width: 100%;
  }
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
