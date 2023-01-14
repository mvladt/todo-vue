import { createStore } from "vuex";
import api from "./api/index.js";

const store = createStore({
  state: {
    token: undefined,
  },
  actions: {},
  getters: {
    getToken: (state) => {
      const result = state.token || localStorage.getItem("token");
      return result;
    },
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
      api.setToken(token);
    },
  },
});

export default store;
