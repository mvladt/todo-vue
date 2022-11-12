<script setup>
import TodoForm from "../components/TodoForm.vue";
import Todo from "../components/TodoItem.vue";
import { inject } from "vue";

const todos = inject("todos");
</script>

<template>
  <div id="todo">
    <TodoForm />
    <Todo v-for="todo in todos" :key="todo._id" :todo="todo" />
  </div>
</template>