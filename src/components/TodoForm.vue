<script setup>
import { inject, ref } from "vue";
import api from "../api/index.js";

const text = ref("");
const todos = inject("todos");
const projectId = inject("currentProjectId");

async function onSubmit() {
  let newTodo = { text: text.value, checked: false };
  newTodo = await api.todo.add(projectId.value, newTodo);
  todos.value.push(newTodo);
  text.value = "";
}
</script>

<template>
  <form class="form wrapper" @submit.prevent="onSubmit">
    <input class="input" type="text" v-model="text" placeholder="Write your todo..." autofocus />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  width: 100%;
}

.input {
  width: 100%;
  display: block;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--base);
  border: 2px solid var(--base-light);
  border-radius: 8px;
}

.input::placeholder {
  font-weight: 400;
  color: var(--base-text-light);
}

.input:focus {
  outline: 1px solid var(--base);
}
</style>
