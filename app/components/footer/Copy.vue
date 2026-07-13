<script setup lang="ts"></script>

<template>
  <div class="copy_wrap">
    <div class="container">
      <div class="copy">
        <div>© 2025 UzCotton. Все права защищены.</div>
        <div>ИНН / ОГРН · Политика конфиденциальности</div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.copy_wrap {
  border-top: 1px solid var(--border);
  padding: 20px 0;
  margin-top: 20px;
}

.copy {
  font-size: 14px;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;

  /* media */
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
  }
}
</style>
