import { createRouter, createWebHashHistory } from "vue-router";
import store from "./store.js";

import TodoPage from "./pages/TodoPage.vue";
import AuthPage from "./pages/AuthPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
    alert("Необходимо авторизоваться");
    return "/signin";
  }
});

export default router;
