<script setup>
import { inject } from "vue";
import TodoItem from "../components/TodoItem.vue";

const todos = inject("todos");

</script>

<template>
  <ul class="list wrapper">
    <TodoItem v-for="t in todos" :key="t._id" :todo="t" />
  </ul>
</template>

<style scoped>
.list {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 768px) {
  .list {
    grid-template-columns: 1fr;
  }
}
</style>