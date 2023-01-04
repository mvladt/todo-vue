<script setup>
import { inject } from "vue";
import Nav from "../components/Nav.vue";
import Burger from "../components/Burger.vue";
import useIsMobile from "../composition/useIsMobile";

const isMenuActive = inject("isMenuActive");
const isMobile = useIsMobile();
</script>

<template>
  <div class="header-wrapper">
    <header class="header">
      <div v-if="!isMobile"></div> <!-- Для корректной работы grid -->
      <Burger v-else @click="isMenuActive = !isMenuActive" />
      <h1 class="title">To Do</h1>
      <Nav />
    </header>
  </div>
</template>

<style scoped>
.header-wrapper {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 3;
}

.header {
  color: var(--base);
  background-color: var(--base-light);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 1rem;
}

.header .title {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
</style>
