<script setup lang="ts">
const formMessage = useTemplateRef('formMessage');

const formMessageOpen = () => {
  formMessage.value?.openModal();
};
</script>

<template>
  <div>
    <UiPageHeader title="Контакты">
      <UiBreadCrumbs :links="[{ title: 'Контакты' }]" />
    </UiPageHeader>

    <!--  -->
    <div class="container">
      <div class="contacts">
        <!--  -->
        <div class="contacts__content">
          <ul class="contacts__content_list">
            <li class="contacts__content_list__item">
              <div class="contacts__content_title">Адрес</div>

              <div class="contacts__content_desc">
                115477, г.. Москва, ул.. Кантемировская, дом. 61, 2 этаж, помещение 1 — склад
                115477, г.. Москва, ул.. Кантемировская, дом. 61, 6 этаж — офис
              </div>
            </li>

            <li class="contacts__content_list__item">
              <div class="contacts__content_title">Режим работы</div>

              <div class="contacts__content_desc">Пн. - Пт.: с 9:00 до 18:00</div>
            </li>

            <li class="contacts__content_list__item">
              <div class="contacts__content_title">Наименование организации работы</div>

              <div class="contacts__content_desc">ООО "Узкоттон"</div>
            </li>

            <li class="contacts__content_list__item">
              <div class="contacts__content_title">ИНН</div>

              <div class="contacts__content_desc">7724409915</div>
            </li>

            <li class="contacts__content_list__item">
              <div class="contacts__content_title">Телефон</div>

              <div class="contacts__content_desc">
                <a href="tel:+7 (499) 343-73-40">+7 (499) 343-73-40</a>
              </div>
            </li>

            <li class="contacts__content_list__item">
              <div class="contacts__content_title">E-mail</div>

              <div class="contacts__content_desc">
                <a href="mailto:sale@uzcotton.ru">sale@uzcotton.ru</a>
              </div>
            </li>
          </ul>

          <!--  -->
          <div class="contacts__vk">
            <NuxtLink to="https://vk.com/uzcotton" target="_blank">
              <SvgVK />
            </NuxtLink>
          </div>

          <!--  -->
          <p class="contacts__ofice">
            Основной офис компании находится в г. Москва. Обязательно приходите к нам на чашку
            ароматного кофе. Совместно обсудим ваши проекты и предложим рекомендации!
          </p>

          <!--  -->
          <UiButton
            title="Написать сообщение"
            view="transparent"
            class="contacts__btn"
            @click-btn="formMessageOpen"
          />
        </div>

        <!-- Карта -->
        <div class="contacts__cart">
          <UiMap />
        </div>
      </div>
    </div>

    <!-- Форма написания сообщения -->
    <Teleport to="body">
      <UiNapisatSoobshenieForm ref="formMessage" />
    </Teleport>
  </div>
</template>

<style lang="css" scoped>
.contacts {
  display: grid;
  grid-template-columns: 530px 1fr;
  column-gap: 20px;

  /* media */
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
}

/*  */

.contacts__content_list {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

/*  */
.contacts__content_title {
  font-size: 14px;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

/*  */
.contacts__content_desc {
  /* media */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

/*  */

.contacts__vk {
  position: relative;
  margin: 24px 0;
  overflow: hidden;

  /* before */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin-left: 46px;
  }

  /* a */
  a {
    display: inline-block;
  }
}

/*  */

.contacts__ofice {
  line-height: 152%;
  margin-bottom: 24px;

  /* media */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

/*  */

.contacts__btn {
  width: 227px;
  border: 1px solid var(--cta);
}

/*  */

.contacts__cart {
  overflow: hidden;

  /* media */
  @media (max-width: 1200px) {
    width: 100%;
    height: 500px;
  }
}
</style>
