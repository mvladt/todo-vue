<script setup>
import AuthForm from "../components/AuthForm.vue";
</script>

<template>
  <div class="form-wrapper">
    <h1 class="title">
      <span v-if="$route.path === '/signin'">Signin</span>
      <span v-if="$route.path === '/signup'">Signup</span>
    </h1>
    <AuthForm />
  </div>
</template>

<style scoped>
.form-wrapper {
  margin-top: -5rem; /* Для красоты */

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: var(--base);
  text-align: center;
}
</style>
