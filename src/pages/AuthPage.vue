<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import authApi from "../api/auth.js";

const store = useStore();
const router = useRouter();

const username = ref("");
const password = ref("");

async function onSubmit() {
  const routePath = router.currentRoute.value.path;
  const requestBody = { username: username.value, password: password.value };
  let authFunc;
  if (routePath === "/signin") authFunc = authApi.signin;
  if (routePath === "/signup") authFunc = authApi.signup;

  const { message, token } = await authFunc(requestBody);
  if (token) {
    store.commit("setToken", token);
    console.log(message);
    router.push("/");
  } else {
    alert(message ?? "Something go wrong...");
  }
}
</script>

<template>
  <div class="form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <h1 class="title">
        <span v-if="$route.path === '/signin'">Signin</span>
        <span v-if="$route.path === '/signup'">Signup</span>
      </h1>
      <div class="line">
        <label>Username</label>
        <input class="input" type="username" v-model="username" required />
      </div>
      <div class="line">
        <label>Password</label>
        <input class="input" type="password" v-model="password" required />
      </div>
      <input class="submit" type="submit" value="Submit" />
    </form>
  </div>
</template>

<style scoped>
.form-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  margin-top: -5rem;
  width: 260px;
  display: grid;
  justify-items: center;
}

.title {
  color: var(--base);
  text-align: center;
}

.line {
  color: var(--base);
  margin-top: 0.5rem;
}

.input {
  width: 100%;
  border: 2px solid var(--base-light);
  outline: 1px solid var(--base);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--base);
  padding: 0.7rem 0.5rem;
  margin: 0;
}

.input:focus {
  outline: 1.5px solid var(--base);
}

.submit {
  width: 135px;
  background-color: var(--base);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  padding: 0.7rem 0.5rem;
  cursor: pointer;
  margin-top: 1.5rem;
}

.submit:hover {
  background-color: var(--base-dark);
}
</style>