<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const store = useStore();

async function onSubmit() {
  store.commit("setAuth", true);
  router.push("/");
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label>Email</label>
    <input type="email" v-model="email" />
    <label>Password</label>
    <input type="password" v-model="password" />
    <input type="submit" value="Submit" />
  </form>
</template>