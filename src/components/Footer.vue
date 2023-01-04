<script setup>
const smile = "\\ (•◡•) /";
</script>

<template>
  <footer class="footer">
    <span class="smile" title="hi">
      {{ smile }}
    </span>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 0.3rem 0;
}

.smile {
  font-weight: 500;
  color: var(--base);
}
</style>
