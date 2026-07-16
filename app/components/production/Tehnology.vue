<script setup lang="ts"></script>

<template>
  <section id="teh" class="teh_wrap">
    <h3 class="teh_h3">Технологии печати</h3>
    <p class="teh_desc">Сравните технологии и выберите подходящую для вашего производства</p>

    <!--  -->
    <ul class="teh__list">
      <li class="teh__list__item">
        <span class="teh__list__item_num">01</span>

        <div class="teh__list__item_text">
          <div class="teh__list__item_text__title">Трафаретная печать (шелкография)</div>
          <p class="teh__list__item_text__desc">
            Классическая технология нанесения краски через сетчатый трафарет. Лучший выбор для
            больших тиражей однотонных и многоцветных изображений на текстиле.
          </p>
        </div>
      </li>
      <li class="teh__list__item">
        <span class="teh__list__item_num">02</span>

        <div class="teh__list__item_text">
          <div class="teh__list__item_text__title">DTF (Direct to Film)</div>
          <p class="teh__list__item_text__desc">
            Печать изображения на специальную плёнку с последующим переносом на ткань под
            термопрессом. Подходит для малых тиражей и сложных полноцветных принтов.
          </p>
        </div>
      </li>
      <li class="teh__list__item">
        <span class="teh__list__item_num">03</span>

        <div class="teh__list__item_text">
          <div class="teh__list__item_text__title">Термотрансфер (ТЕРМО пресс)</div>
          <p class="teh__list__item_text__desc">
            Перенос готового изображения с термобумаги или винила на изделие под воздействием
            температуры и давления. Простое и доступное решение.
          </p>
        </div>
      </li>
      <li class="teh__list__item">
        <span class="teh__list__item_num">04</span>

        <div class="teh__list__item_text">
          <div class="teh__list__item_text__title">Машинная вышивка</div>
          <p class="teh__list__item_text__desc">
            Нанесение изображения нитками при помощи вышивальных машин. Премиальный вид,
            долговечность. Оптимально для логотипов на форменной одежде.
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="css" scoped>
.teh_h3 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.teh_desc {
  color: var(--text-secondary);

  /* media */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

/*  */

.teh__list {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 30px;
  margin-bottom: 30px;
  margin-top: 24px;
}

/*  */
.teh__list__item {
  display: flex;
  align-items: center;
  column-gap: 32px;

  /* media */
  @media (max-width: 576px) {
    column-gap: 21px;
  }
}

/*  */
.teh__list__item_num {
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 44px;
  color: var(--border);

  /* media */
  @media (max-width: 576px) {
    font-size: 32px;
  }
}

/*  */
.teh__list__item_text__title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.teh__list__item_text__desc {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: var(--text-secondary);

  /* media */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
</style>
