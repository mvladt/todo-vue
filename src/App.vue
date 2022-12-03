<script setup>
import { useStore } from "vuex";
import Nav from "./components/Nav.vue";
import { headersSetToken } from "./api/index.js";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => headersSetToken(store.getters.getToken));

</script>

<template>
  <Nav /><br />
  <RouterView />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}
</style>