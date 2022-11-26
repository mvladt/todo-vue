<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import authApi from "../api/auth.js";
import { headersSetToken } from "../api/index.js";

const store = useStore();
const router = useRouter();

const username = ref("");
const password = ref("");

async function onSubmit() {
  const routePath = router.currentRoute.value.path;
  const requestBody = {
    username: username.value,
    password: password.value,
  };
  let authFunc;
  if (routePath === "/signin") authFunc = authApi.signin;
  if (routePath === "/signup") authFunc = authApi.signup;

  const { message, token } = await authFunc(requestBody);
  if (token) {
    store.commit("setToken", token);
    headersSetToken(token);
    alert(message);
    router.push("/");
  } else {
    alert(message ?? "Ошибка");
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>Username</label>
      <input type="username" v-model="username" required />
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="password" required />
    </div>
    <input type="submit" value="Submit" />
  </form>
</template>