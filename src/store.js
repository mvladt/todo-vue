import { createStore } from "vuex";

const store = createStore({
  state: {
    auth: false,
  },
  actions: {},
  getters: {
    getAuth: (state) => state.auth,
  },
  mutations: {
    setAuth: (state, auth) => (state.auth = auth),
  },
});

export default store;
