<script setup>
import { useStore } from "vuex";
import Nav from "./components/Nav.vue";
import { headersSetToken } from "./api/index.js";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => headersSetToken(store.getters.getToken));

// TODO: удаление проектов, иконка signout, выпадающее меню, адаптив
</script>

<template>
  <header class="header">
    <h1 class="title">To Do</h1>
    <Nav />
  </header>
  <main class="main">
    <RouterView />
  </main>
  <footer class="footer">
    <span class="smile">\ (•◡•) /</span>
  </footer>
</template>

<style>
:root {
  --nav-width: 200px;
}

#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
  padding-top: 1rem;
}

.header {
  position: sticky;
  top: 1rem;
  z-index: 3;
  color: var(--base);
  background-color: var(--base-light);
  text-align: center;

  display: grid;
  grid-template-columns: 1fr auto;

}

.header .title {
  height: 3rem;
  line-height: 3rem;
  margin-right: calc(-1 * var(--nav-width));
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer {
  text-align: center;
  padding: 0.3rem 0;
}

.smile {
  font-weight: 500;
  color: var(--base);
}
</style>