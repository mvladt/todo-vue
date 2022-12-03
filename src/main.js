import { createApp } from "vue";

import App from "./App.vue";
import store from "./store.js";
import router from "./router.js";

import "./main.css";

createApp(App).use(store).use(router).mount("#app");
