<script setup>
import useIsMobile from "../composition/useIsMobile.js";
import ProjectItem from "./ProjectItem.vue";

const emit = defineEmits(["change", "add"]);
const { active, projects, value } = defineProps(["active", "projects", "value"]);

function handleChange(projectId) {
  emit("change", projectId);
}

const isMobile = useIsMobile();

</script>

<template>
  <div class="projects" v-if="active || !isMobile" :class="{ mobile: isMobile }">
    <ProjectItem v-for="p in projects" :key="p._id" :project="p" @change="handleChange" />

    <button class="add" @click="emit('add')">
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
  margin-left: calc(0.5rem + 6px);
  margin-top: 1rem;
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