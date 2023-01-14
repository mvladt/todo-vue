<script setup>
const emit = defineEmits(["active", "delete", "timer"]);
const { display, isActive } = defineProps(["display", "is-active"]);
</script>

<template>
  <div v-show="display" class="options" @click="emit('active')">
    <div class="dropdown">
      <div class="icon">
        <svg class="svg" viewBox="0 0 100 450" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="white" />
          <circle cx="50" cy="225" r="50" fill="white" />
          <circle cx="50" cy="400" r="50" fill="white" />
        </svg>
      </div>
      <ul class="dropdown-content" v-if="isActive">
        <li class="option" @click="emit('delete')">Delete</li>
        <li class="option" @click="emit('timer')">Set timer</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.options {
  width: 25px;
  height: 25px;
  display: block;
  position: absolute;
  top: 5px;
  right: -12px;
  cursor: pointer;
}

.option {
}

.option:hover {
  background-color: var(--base-light);
}

.dropdown {
  width: 26px;
  height: 26px;
  position: relative;
  display: block;

  background-color: var(--base);
  border-radius: 13px;
}

.dropdown-content {
  margin-top: 3px;
  padding: 3px 0;
  display: block;
  position: absolute;
  background-color: white;
  min-width: 160px;
  border: 1px solid var(--base);
  border-radius: 8px;
  z-index: 1;
}

.icon {
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg {
  height: 14px;
}
</style>
