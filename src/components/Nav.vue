<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore();

// TODO: как сделать computed из стороннего js-объекта, например из кастомного стора
const token = computed(() => store.getters.getToken); 

</script>                                           

<template>
  <nav class="nav">
    <span v-if="!token && $route.path === '/signup'">
      <RouterLink class="link" to="/signin">Signin</RouterLink>
    </span>
    <span v-if="!token && $route.path === '/signin'">
      <RouterLink class="link" to="/signup">Signup</RouterLink>
    </span>
    <span v-if="token">
      <RouterLink class="link" to="/signout">Signout</RouterLink>
    </span>
  </nav>
</template>

<style scoped>
.nav {
  width: var(--nav-width);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 2rem;
}

.link {
  text-decoration: none;
  color: var(--base);
  font-size: 20px;
  font-weight: 500;
}

.link:hover {
  color: var(--base-dark);
}
</style>