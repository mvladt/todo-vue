<script setup>
import ProjectItem from "./ProjectItem.vue";

const emit = defineEmits(["change", "add"]);
const { projects, value } = defineProps(["projects", "value"]);

function handleChange(projectId) {
  emit("change", projectId);
}

</script>

<template>
  <div class="projects">
    <ProjectItem v-for="p in projects" :key="p._id" :project="p" @change="handleChange" />

    <button class="add" @click="emit('add')">
      <svg class="svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path class="path" d="M300 0H200V200H0V300H200V500H300V300H500V200H300V0Z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.projects {
  position: fixed;
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