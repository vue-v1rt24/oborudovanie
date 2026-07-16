<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="menu">
      <li class="catalog">
        <span>
          <SvgCatalog />
        </span>

        <NuxtLink to="/catalog">Каталог</NuxtLink>

        <!-- Выпадающее меню -->
        <!-- <HeaderMenuSubMenu /> -->
      </li>
      <li>
        <NuxtLink to="https://uzcotton.ru/company" target="_blank">О компании</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/production">Продукция</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.menu {
  display: flex;
  align-items: center;
  column-gap: 32px;

  /* li */
  li {
    /* a */
    a {
      height: 72px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid transparent;

      /* .active */
      &.active {
        border-color: var(--cta);
      }
    }
  }
}

/*  */

.catalog {
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>
