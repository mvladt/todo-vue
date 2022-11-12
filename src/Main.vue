<script setup>
import { useStore } from "vuex";
import { computed } from '@vue/reactivity';
import { provide, ref } from 'vue';
import todoApi from "./api/todo.js";
import Nav from "./components/Nav.vue";

const todos = ref([]);
const store = useStore();

todoApi.getAll().then(response => todos.value = response);

const auth = computed(() => {
  return store.getters.getAuth;
})

provide("todos", todos);
</script>

<template>
  <div id="main">
    <Nav /><br />
    <RouterView />
  </div>
</template>
