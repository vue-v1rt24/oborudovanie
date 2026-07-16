<script setup lang="ts"></script>

<template>
  <section id="oborudovanie" class="oborudovanie_wrap">
    <h3 class="oborudovanie_h3">Как выбрать оборудование</h3>

    <!--  -->
    <div class="oborudovanie">
      <div class="oborudovanie_h3">Подберём под ваш масштаб</div>

      <!--  -->
      <p class="oborudovanie__desc">
        Расскажите о задаче — и мы предложим оптимальный комплект оборудования с учётом тиража,
        бюджета и типа изделий.
      </p>

      <!--  -->
      <ul class="oborudovanie__list">
        <li class="oborudovanie__list_item">
          <div class="oborudovanie__list_item__title">1. Определите тираж</div>

          <div class="oborudovanie__list_item__desc">
            До 500 шт./день — ручное оборудование. От 500 — полуавтомат или автомат.
          </div>
        </li>
        <li class="oborudovanie__list_item">
          <div class="oborudovanie__list_item__title">2. Выберите технологию</div>

          <div class="oborudovanie__list_item__desc">
            Многоцвет на футболках → шелкография. Малые тиражи с фото → DTF. Корпоратив → вышивка.
          </div>
        </li>
        <li class="oborudovanie__list_item">
          <div class="oborudovanie__list_item__title">3. Учтите бюджет</div>

          <div class="oborudovanie__list_item__desc">
            Стартовый комплект от 150 000 ₽. Профессиональная линия — от 1 500 000 ₽.
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="css" scoped>
.oborudovanie_wrap {
  border-bottom: 1px solid var(--border);
  padding-bottom: 30px;
  margin-bottom: 30px;
}

/*  */

.oborudovanie_h3 {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;
}

/*  */

.oborudovanie {
  background-color: var(--bg-secondary);
  border-radius: 16px;
  padding: 16px;
  margin-top: 24px;

  /* .oborudovanie_h3 */
  .oborudovanie_h3 {
    color: var(--text-secondary);
  }
}

/*  */
.oborudovanie__desc {
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.01em;
  color: var(--text-secondary);
  margin: 10px 0 20px 0;
}

/*  */

.oborudovanie__list {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.01em;
  color: var(--text-secondary);
}

.oborudovanie__list_item {
}

.oborudovanie__list_item__title {
  font-weight: 700;
}

.oborudovanie__list_item__desc {
  padding-left: 16px;
}
</style>
