<script setup>
import { inject, ref } from 'vue';
import todoApi from "../api/todo.js";

const text = ref("");
const todos = inject("todos");
const projectId = inject("currentProjectId")

async function onSubmit() {
  let newTodo = { text: text.value, checked: false };
  newTodo = await todoApi.add(projectId.value, newTodo);
  todos.value.push(newTodo);
  text.value = "";
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="text" />
  </form>
</template>