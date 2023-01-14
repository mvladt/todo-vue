<script setup>
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
import ProjectsMenu from "../components/ProjectsMenu.vue";
import api from "../api/index.js";
import { onMounted, provide, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const todos = ref([]);
const projects = ref([]);
const currentProjectId = ref("");

onMounted(async () => {
  if (store.getters.getToken) {
    projects.value = await api.project.getAll();
    currentProjectId.value = projects.value[0]._id;
    todos.value = await api.todo.getByProjectId(currentProjectId.value);
  }
});

provide("todos", todos);
provide("projects", projects);
provide("currentProjectId", currentProjectId);
</script>

<template>
  <ProjectsMenu />
  <TodoForm />
  <TodoList />
</template>
