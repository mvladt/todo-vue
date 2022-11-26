import { createStore } from "vuex";

const store = createStore({
  state: {
    token: false, 
  },
  actions: {},
  getters: {
    getToken: (state) => state.token,
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
  },
});

export default store;
