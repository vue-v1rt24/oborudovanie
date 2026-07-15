<script setup lang="ts">
defineProps<{
  classPage?: string;
}>();
</script>

<template>
  <footer :class="['footer', classPage]">
    <div class="container">
      <div class="footer_wrap_menu">
        <FooterDesc />
        <FooterMenu />
      </div>
    </div>

    <!--  -->
    <FooterCopy />
  </footer>
</template>

<style lang="css" scoped>
.footer {
  padding: 20px 0;
  margin-top: 40px;

  /* .home */
  &.home {
    margin-top: 0;
  }
}

/*  */
.footer_wrap_menu {
  display: flex;
  column-gap: 30px;
  justify-content: space-between;

  /* media */
  @media (max-width: 1100px) {
    flex-direction: column;
    row-gap: 60px;
  }
}
</style>
