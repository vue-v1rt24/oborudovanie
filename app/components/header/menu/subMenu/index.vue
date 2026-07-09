<script setup lang="ts">
const links = [
  {
    title: 'Трафаретная печать',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Для DTF',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Для UV DTF',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Для вышивки',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Эмбоссинг',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Тиснение',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Лазерная гравировка',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Значки и магниты',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Режущие плоттеры',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Прессы термопереноса',
    subLink: ['#', '#', '#', '#'],
  },
  {
    title: 'Вязальное оборудование',
    subLink: ['#', '#', '#', '#'],
  },
];
</script>

<template>
  <div class="submenu__wrap">
    <ul id="submenu" class="submenu">
      <li v-for="{ title } in links" :key="title">
        <div class="submenu__link">
          <span>
            {{ title }}
          </span>

          <span>
            <SvgArrow />
          </span>
        </div>
      </li>
    </ul>

    <!--  -->
    <div class="submenu_content">
      <div class="submenu_content__top">
        <span class="submenu_content__top_title">Трафаретная печать</span>
        <span class="submenu_content__top_line"></span>
      </div>

      <!--  -->
      <div class="submenu_content__services">
        <NuxtLink to="#" class="submenu_content__services_bx">
          <span class="submenu_content__services_svg">
            <SvgMenuOborudovanie />
          </span>

          <div class="submenu_content__services_text">
            <span class="submenu_content__services_text__title">Оборудование</span>
            <span>Станки, сушилки, ...</span>
          </div>
        </NuxtLink>

        <NuxtLink to="#" class="submenu_content__services_bx">
          <span class="submenu_content__services_svg">
            <SvgMenuServices />
          </span>

          <div class="submenu_content__services_text">
            <span class="submenu_content__services_text__title">Услуги</span>
            <span>Станки, сушилки, ...</span>
          </div>
        </NuxtLink>

        <NuxtLink to="#" class="submenu_content__services_bx">
          <span class="submenu_content__services_svg">
            <SvgMenuMaterials />
          </span>

          <div class="submenu_content__services_text">
            <span class="submenu_content__services_text__title">Расходные материалы</span>
            <span>Станки, сушилки, ...</span>
          </div>
        </NuxtLink>

        <NuxtLink to="#" class="submenu_content__services_bx">
          <span class="submenu_content__services_svg">
            <SvgMenuZapaska />
          </span>

          <div class="submenu_content__services_text">
            <span class="submenu_content__services_text__title">Запасные части</span>
            <span>Станки, сушилки, ...</span>
          </div>
        </NuxtLink>
      </div>

      <!--  -->
      <div class="submenu_content__popular"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.submenu__wrap {
  position: absolute;
  top: 20px;
  left: 0;
  display: grid;
  grid-template-columns: 324px 1000px;
  /* opacity: 0; */
  /* transform: translateY(10px); */
  /* visibility: hidden; */
  box-shadow:
    0 4px 4px -4px rgba(12, 12, 13, 0.05),
    0 16px 32px -4px rgba(12, 12, 13, 0.1);
  background: var(--bg-primary);
  padding: 18px;
  border-radius: 0 0 16px 16px;
  transition:
    opacity var(--transition),
    transform var(--transition),
    visibility var(--transition);

  /* hover */
  .catalog:hover & {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
}

/*  */

.submenu {
  font-size: 14px;
  border-right: 1px solid var(--bg-secondary);
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  padding-right: 15px;
}

/*  */
.submenu__link {
  background-color: var(--bg-primary);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 8px;
  cursor: pointer;
  transition: background-color var(--transition);

  /* hover */
  &:hover,
  &.active {
    background-color: var(--bg-secondary);
  }
}

/*  */

.submenu_content {
  padding-left: 24px;
}

/*  */
.submenu_content__top {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.submenu_content__top_title {
  flex-shrink: 0;
  font-weight: 600;
  font-size: 14px;
}

.submenu_content__top_line {
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
}

/*  */
.submenu_content__services {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 8px;
  margin-top: 16px;
}

.submenu_content__services_bx {
  background-color: transparent;
  border-radius: 16px;
  display: flex;
  column-gap: 8px;
  padding: 8px;
  cursor: pointer;
  transition: background-color var(--transition);

  /* hover */
  &:hover {
    background-color: var(--bg-secondary);
  }
}

.submenu_content__services_svg {
  flex-shrink: 0;
}

.submenu_content__services_text {
  font-size: 12px;
  color: var(--text-secondary);

  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

.submenu_content__services_text__title {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-primary);
}
</style>
