<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="menu">
      <li class="catalog">
        <NuxtLink to="/catalog" class="catalog__link">
          <span>
            <SvgCatalog />
          </span>

          Каталог
        </NuxtLink>

        <!-- Выпадающее меню -->
        <!-- <HeaderMenuSubMenu /> -->
      </li>
      <li>
        <NuxtLink to="/about">О компании</NuxtLink>
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
}

/*  */

.catalog {
  position: relative;
}

/*  */
.catalog__link {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>
