// store/index.js

import { createStore } from "vuex";
import { Login } from "../api"; // import fungsi Login yang sudah dibuat sebelumnya

const storageKey = "authState";

export default createStore({
  state: {
    isAuthenticated: false,
    userName: null,
  },
  mutations: {
    setAuthentication(state, { status, userName }) {
      state.isAuthenticated = status;
      state.userName = userName;
      localStorage.setItem(storageKey, JSON.stringify({ isAuthenticated: status, userName }));
    },
    initializeStore(state) {
      const savedState = JSON.parse(localStorage.getItem(storageKey));
      if (savedState) {
        state.isAuthenticated = savedState.isAuthenticated;
        state.userName = savedState.userName;
      }
    },
  },
  actions: {
    async login({ commit }, { userName, password }) {
      try {
        const response = await Login(userName, password);
        commit("setAuthentication", { status: true, userName: response.userName });
      } catch (error) {
        console.error("Login gagal:", error);
        throw error;
      }
    },
    logout({ commit }) {
      commit("setAuthentication", { status: false, userName: null });
      localStorage.removeItem(storageKey);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userName: (state) => state.userName,
  },
});


