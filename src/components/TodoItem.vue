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
  <div>
    <span>{{ todo.text }}</span>
    <input type="checkbox" v-model="todo.checked" @click="onUpdate" />
    <input type="button" value="Delete" @click="onDelete" />
  </div>
</template>