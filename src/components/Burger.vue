<script setup>

</script>

<template>
  <button class="burger button">
    <svg class="svg" viewBox="0 0 30 21" xmlns="http://www.w3.org/2000/svg">
      <path class="path" d="M30 8.668H0V12.332H30V8.668Z" />
      <path class="path" d="M30 17.336H0V21H30V17.336Z" />
      <path class="path" d="M30 0H0V3.66401H30V0Z" />
    </svg>
  </button>
</template>

<style scoped>
.burger {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.button {
  width: fit-content;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  padding-inline: 1rem;
}

.svg {
  height: 20px;
}

.path {
  fill: var(--base);
}
</style>