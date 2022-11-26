<script setup>
import { useStore } from "vuex";
import { computed } from '@vue/reactivity';
import { provide, ref } from 'vue';
import todoApi from "./api/todo.js";
import Nav from "./components/Nav.vue";

const todos = ref([]);
const store = useStore();

todoApi.getAll().then(todos => todos.value = todos);

const token = computed(() => {
  return store.getters.getToken;
})

provide("todos", todos);
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