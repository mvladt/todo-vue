<script setup>
import { inject } from "vue";
import todoApi from "../api/todo.js";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  }
});
const todos = inject("todos");

async function onDelete() {
  await todoApi.remove(props.todo._id);
  todos.value = todos.value.filter(todo => todo._id !== props.todo._id);
}

async function onUpdate() {
  await todoApi.update({
    _id: props.todo._id,
    checked: !props.todo.checked,
  });
}
</script>

<template>
  <li class="item" :class="{ checked: todo.checked }">
    <input type="checkbox" v-model="todo.checked" @click="onUpdate" />
    &nbsp;
    <span>{{ todo.text }}</span>
    &nbsp;
    <button class="delete" @click="onDelete">&times;</button>
  </li>
</template>

<style scoped>
.item {
  width: 100%;
  position: relative;
  padding: 0.5rem;
  color: var(--base);
  text-align: center;
  border: 1px solid var(--base-light);
  border-radius: 8px;
  background-color: var(--base-light);
}

.item:hover {
  border: 1px solid var(--base);
}

.item.checked {
  text-decoration: line-through;
  color: darkgray;
}

.delete {
  display: none;
  position: absolute;
  top: -7px;
  right: -7px;
  height: 25px;
  width: 25px;
  border-radius: 35%;
  border: none;
  background-color: tomato;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.item:hover .delete {
  display: block;
}

input[type="checkbox"] {
  cursor: pointer;
}
</style>