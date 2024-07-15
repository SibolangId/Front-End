// store/index.js

import { createStore } from "vuex";
import { Login } from "../api"; // import fungsi Login yang sudah dibuat sebelumnya

export default createStore({
  state: {
    isAuthenticated: false,
    userName: null,
  },
  mutations: {
    setAuthentication(state, { status, userName }) {
      state.isAuthenticated = status;
      state.userName = userName;
    },
  },
  actions: {
    async login({ commit }, { userName, password }) {
      try {
        const response = await Login(userName, password);
        commit("setAuthentication", { status: true, userName: response.userName });
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    logout({ commit }) {
      commit("setAuthentication", { status: false, userName: null });
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userName: (state) => state.userName,
  },
});
