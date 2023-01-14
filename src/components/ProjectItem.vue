<script setup>
import { inject } from "vue";
import todoApi from "../api/todo.js";

const { project } = defineProps(["project"]);

const currentId = inject("currentProjectId");
const isMenuActive = inject("isMenuActive");
const todos = inject("todos");

async function onChange() {
  currentId.value = project._id;
  isMenuActive.value = false;
  todos.value = await todoApi.getByProjectId(currentId.value);
}
</script>

<template>
  <button class="item button" :class="{ active: currentId == project._id }" @click="onChange">
    <div class="cube"></div>
    {{ project.name }}
  </button>
</template>

<style scoped>
.item {
  padding: 0.6rem 1rem 0.6rem 2rem;
  border-radius: 0 8px 8px 0;
  border: 1px solid rgba(0, 0, 0, 0);
  color: var(--base);
  font-weight: 500;
  width: 220px;
  overflow: hidden;
}

.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
}

.active {
  background-color: var(--base-light);
}

.item:hover {
  border: 1px solid var(--base);
}

.cube {
  --size: 10px;
  width: var(--size);
  height: var(--size);
  background-color: var(--base);
}
</style>
