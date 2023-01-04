<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import authApi from "../api/auth.js";

const router = useRouter();
const store = useStore();

const authFunction = computed(() => {
  const routePath = router.currentRoute.value.path;
  if (routePath === "/signin") return authApi.signin;
  if (routePath === "/signup") return authApi.signup;
});

const username = ref("");
const password = ref("");

async function onSubmit() {
  const requestBody = { username: username.value, password: password.value };
  const { message, token } = await authFunction.value(requestBody);

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
  <form class="form" @submit.prevent="onSubmit">
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
</template>

<style scoped>
.form {
  width: 260px;
  display: grid;
  justify-items: center;
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
