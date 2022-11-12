<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore();

const auth = computed(() => store.getters.getAuth);
</script>

<template>
  <div id="navigation">
    <RouterLink to="/">Todo</RouterLink> |
    <span v-if="!auth">
      <RouterLink to="/login">Login</RouterLink> |
    </span>
    <span v-if="auth">
      <RouterLink to="/logout">Logout</RouterLink> |
    </span>
  </div>
</template>