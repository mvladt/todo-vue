import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import store from "./store.js";

import TodoPage from "./pages/TodoPage.vue";
import AuthPage from "./pages/AuthPage.vue";

const BASE_URL = process.env.BASE_URL;

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [
    { path: "/", component: TodoPage },
    { path: "/signin", component: AuthPage },
    { path: "/signup", component: AuthPage },
    {
      path: "/signout",
      component: TodoPage,
      beforeEnter: () => {
        store.commit("setToken", undefined);
        return "/signin";
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const isAuth = store.getters.getToken;
  if (!isAuth && !["/signin", "/signup", "/signout"].includes(to.path)) {
    alert("You need to log in");
    return "/signin";
  }
});

export default router;
