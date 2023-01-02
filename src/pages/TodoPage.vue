<script setup>
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
import ProjectsMenu from "../components/ProjectsMenu.vue";
import todoApi from "../api/todo.js";
import projectApi from "../api/project.js";
import { onMounted, inject, provide, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const projects = ref([]);
const currentProjectId = ref("");
const todos = ref([]);

const isMenuActive = inject("isMenuActive");

onMounted(async () => {
  if (store.getters.getToken) {
    projects.value = await projectApi.getAll();
    currentProjectId.value = projects.value[0]._id;
    todos.value = await todoApi.getByProjectId(currentProjectId.value);
  }
});

async function handleSelectChange(projectId) {
  currentProjectId.value = projectId;
  isMenuActive.value = false;
  todos.value = await todoApi.getByProjectId(currentProjectId.value);
}

async function handleAddProject() {
  const newProjectName = prompt("New Project name:");

  if (newProjectName.length > 15) {
    alert("The project name must not exceed 15 characters");
    return;
  }

  const newProject = await projectApi.add(newProjectName);
  if (!newProject.error) {
    projects.value.push(newProject);
  } else {
    console.log(newProject.message)
  }
}

provide("todos", todos);
provide("currentProjectId", currentProjectId);
</script>

<template>
  <ProjectsMenu :active="isMenuActive" :projects="projects" :value="currentProjectId" @change="handleSelectChange"
    @add="handleAddProject" />
  <TodoForm />
  <TodoList />
</template>