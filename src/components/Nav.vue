<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore();

const token = computed(() => store.getters.getToken); 
// TODO: как сделать computed из стороннего js-объекта, например из кастомного стора
</script>                                           

<template>
  <div id="navigation">
    <RouterLink to="/">Todo</RouterLink> |
    <span v-if="!token">
      <RouterLink to="/signin">Signin</RouterLink> |
    </span>
    <span v-if="!token">
      <RouterLink to="/signup">Signup</RouterLink> |
    </span>
    <span v-if="token">
      <RouterLink to="/signout">Signout</RouterLink> |
    </span>
  </div>
</template>