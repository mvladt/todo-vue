<script setup>
import TodoForm from "../components/TodoForm.vue";
import TodoItem from "../components/TodoItem.vue";
import ProjectSelect from "../components/ProjectSelect.vue";
import todoApi from "../api/todo.js";
import projectApi from "../api/project.js";
import { onMounted, provide, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const projects = ref([]);
const currentProjectId = ref("");
const todos = ref([]);

onMounted(async () => {
  if (store.getters.getToken) {
    projects.value = await projectApi.getAll();
    currentProjectId.value = projects.value[0]._id;
    todos.value = await todoApi.getByProjectId(currentProjectId.value);
  }
});

async function handleSelectChange($event) {
  currentProjectId.value = $event.target.value;
  todos.value = await todoApi.getByProjectId(currentProjectId.value);
}

async function handleAddProject() {
  const newProject = await projectApi.add(prompt("New Project name:"));
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
  <div>
    <ProjectSelect :projects="projects" :value="currentProjectId" @change="handleSelectChange"
      @add="handleAddProject" />
    <TodoForm />
    <TodoItem v-for="todo in todos" :key="todo._id" :todo="todo" />
  </div>
</template>