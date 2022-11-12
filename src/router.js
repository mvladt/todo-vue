import { createRouter, createWebHashHistory } from "vue-router";
import store from "./store.js";

import Todo from "./pages/Todo.vue";
import Login from "./pages/Login.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Todo },
    { path: "/login", component: Login },
    {
      path: "/logout",
      component: Todo,
      beforeEnter: () => {
        store.commit("setAuth", false);
        return "/login";
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const isAuth = store.getters.getAuth;
  if (!isAuth && to.path !== "/login" && to.path !== "/logout") {
    alert("Необходимо авторизоваться");
    return "/login";
  }
});

export default router;
