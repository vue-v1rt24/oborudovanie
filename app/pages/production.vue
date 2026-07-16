<script setup lang="ts"></script>

<template>
  <div>
    <UiPageHeader title="Продукция">
      <UiBreadCrumbs :links="[{ title: 'Продукция' }]" />
    </UiPageHeader>

    <!--  -->
    <div class="container">
      <div class="production">
        <div class="production__menu">
          <a href="#brands">Бренды-производители</a>
          <a href="#teh">Технологии печати</a>
          <a href="#oborudovanie">Как выбрать оборудование</a>
          <a href="#service">Гарантия и сервис</a>
        </div>

        <div>
          <!-- Бренды-производители -->
          <ProductionBrands />

          <!-- Технологии печати -->
          <ProductionTehnology />

          <!-- Как выбрать оборудование -->
          <ProductionOborudovanie />

          <!-- Гарантия и сервис -->
          <ProductionGarantiya />
        </div>
      </div>
    </div>

    <!--  -->
    <UiConsultation />
  </div>
</template>

<style lang="css" scoped>
.production {
  display: grid;
  grid-template-columns: 330px 1fr;
  column-gap: 136px;
  margin-bottom: 50px;

  /* media */
  @media (max-width: 1400px) {
    column-gap: 30px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 750px) {
    display: block;
  }

  /* sections */
  section {
    scroll-margin-top: 35px;
  }
}

/*  */
.production__menu {
  position: sticky;
  top: 30px;
  height: 195px;
  border: 1px solid var(--border);
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  /* media */
  @media (max-width: 1200px) {
    display: none;
  }

  /* a */
  a {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 8px;

    /*  */
    &:not(:last-child) {
      border-bottom: 1px solid var(--border);
    }
  }
}
</style>
