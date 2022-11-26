import { createRouter, createWebHashHistory } from "vue-router";
import store from "./store.js";

import Todo from "./pages/Todo.vue";
import AuthForm from "./pages/AuthForm.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Todo },
    { path: "/signin", component: AuthForm },
    { path: "/signup", component: AuthForm },
    {
      path: "/signout",
      component: Todo,
      beforeEnter: () => {
        store.commit("setToken", false);
        return "/signin";
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const isAuth = store.getters.getToken;
  if (!isAuth && !["/signin", "/signup", "/signout"].includes(to.path)) {
    alert("Необходимо авторизоваться");
    return "/signin";
  }
});

export default router;
