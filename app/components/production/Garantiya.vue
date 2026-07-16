<script setup lang="ts"></script>

<template>
  <section id="service">
    <h3 class="service_h3">Гарантия и сервис</h3>

    <!--  -->
    <ul class="service__list">
      <li>
        <div class="service__list_title">Гарантия 12 месяцев</div>

        <p class="service__list_desc">
          На всё оборудование от официальных дистрибьюторов. Гарантийный ремонт без дополнительных
          условий.
        </p>
      </li>
      <li>
        <div class="service__list_title">Пусконаладка</div>

        <p class="service__list_desc">
          Выезд инженера для монтажа и запуска оборудования на вашем производстве. По всей России.
        </p>
      </li>
      <li>
        <div class="service__list_title">Оригинальные запчасти</div>

        <p class="service__list_desc">
          Склад запасных частей для всех брендов в наличии. Срочная отправка по России в течение
          24ч.
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="css" scoped>
.service_h3 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
}

/*  */

.service__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  margin-top: 24px;

  /* media */
  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  /* li */
  li {
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px;
  }
}

.service__list_title {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 152%;
  letter-spacing: 0.01em;
  color: var(--text-primary);
  margin-bottom: 12px;

  /* media */
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.service__list_desc {
  line-height: 152%;

  /* media */
  @media (max-width: 768px) {
    font-size: 16px;
  }
}
</style>
