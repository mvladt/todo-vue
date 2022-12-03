<script setup>
defineEmits(["change", "add"]);

const { projects, value } = defineProps(["projects", "value"]);

</script>

<template>
  <select :value="value" @change="$emit('change', $event)">
    <option v-for="p in projects" :value="p._id" :key="p._id">
      {{ p.name }}
    </option>
  </select>
  <button @click="$emit('add')">Add</button>
</template>