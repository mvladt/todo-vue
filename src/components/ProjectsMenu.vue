<script setup>
import { inject } from "vue";
import useIsMobile from "../composition/useIsMobile.js";
import ProjectItem from "./ProjectItem.vue";
import projectApi from "../api/project.js";

const isMenuActive = inject("isMenuActive");
const isMobile = useIsMobile();

const projects = inject("projects");
const currentProjectId = inject("currentProjectId");

async function onAddProject() {
  const newProjectName = prompt("New Project name:");

  if (newProjectName.length > 15) {
    alert("The project name must not exceed 15 characters");
    return;
  }

  const newProject = await projectApi.add(newProjectName);

  // TODO: странная конструкция
  if (!newProject.error) {
    projects.value.push(newProject);
    currentProjectId.value = newProject._id;
  } else {
    console.log(newProject.message);
  }
}
</script>

<template>
  <div class="projects" v-if="isMenuActive || !isMobile" :class="{ mobile: isMobile }">
    <ProjectItem
      v-if="projects.length"
      v-for="p in projects"
      :key="p._id"
      :project="p"
      :title="'Project \'' + p.name + '\''"
    />
    <div class="message" v-else>No projects yet...</div>

    <button class="add" @click="onAddProject" title="New Project">
      <svg class="svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path class="path" d="M300 0H200V200H0V300H200V500H300V300H500V200H300V0Z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.projects.mobile {
  background-color: rgb(250, 252, 255);
  border-left: 1px solid var(--base-light);
  height: 100vh;
  margin-top: -1.5rem;
  padding-top: 1.5rem;
  padding-right: 1rem;
}

.projects {
  position: fixed;
  z-index: 5;
}

.message {
  color: var(--base);
  margin-left: 2rem;
}

.add {
  --size: 3rem;

  width: var(--size);
  height: var(--size);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: calc(var(--size) / 2);
  color: white;
  background-color: var(--base-light);
  cursor: pointer;
  padding: 0;
  margin-left: 1.5rem;
  margin-top: 1.3rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg {
  height: calc(var(--size) / 2);
}

.path {
  fill: white;
}

.add:hover {
  border: 1px solid var(--base);
}
</style>
