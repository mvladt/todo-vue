<script setup>
// TODO: удаление проектов, иконка signout

import { useStore } from "vuex";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import api from "./api/index.js";
import { onMounted, ref, provide } from "vue";

const store = useStore();

onMounted(() => api.setToken(store.getters.getToken));

const isMenuActive = ref(false);
provide("isMenuActive", isMenuActive);
</script>

<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
