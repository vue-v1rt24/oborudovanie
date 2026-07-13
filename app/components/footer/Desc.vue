<script setup lang="ts"></script>

<template>
  <div class="desc">
    <div class="desc__title">UzCotton</div>

    <p class="desc__article">
      Оборудование и расходные материалы для текстильной трафаретной печати. Москва, доставка по
      всей России.
    </p>

    <a class="desc__tel" href="tel:+74993437340">
      <span class="desc__tel_text">+7 (499) 343-73-40</span>

      <span class="desc__tel_img">
        <SvgTel />
      </span>
    </a>
  </div>
</template>

<style lang="css" scoped>
.desc {
  position: relative;
  width: 329px;

  /* media */
  @media (max-width: 1100px) {
    width: auto;
  }
}

/*  */
.desc__title {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 28px;

  /* media */
  @media (max-width: 576px) {
    padding: 0 30px;
    margin-top: 6px;
  }
}

/*  */
.desc__article {
  line-height: 1.5;
  margin: 8px 0 50px 0;

  /* media */
  @media (max-width: 1100px) {
    width: 90%;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    display: none;
  }
}

/*  */
.desc__tel {
  font-weight: 600;
  font-size: 14px;
}

.desc__tel_text {
  /* media */
  @media (max-width: 1100px) {
    display: none;
  }
}

.desc__tel_img {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  /* media */
  @media (max-width: 1100px) {
    display: flex;
  }

  @media (max-width: 576px) {
    right: 30px;
  }
}
</style>
