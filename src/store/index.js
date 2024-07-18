import { createStore } from 'vuex';
import { Login } from '../api'; // import fungsi Login yang sudah dibuat sebelumnya
import destination from './modules/destination'; // Pastikan pathnya benar

const storageKey = 'authState';

export default createStore({
  state: {
    isAuthenticated: false,
    userName: null,
    token: null, // Tambahkan token di sini
  },
  mutations: {
    setAuthentication(state, { status, userName, token }) {
      state.isAuthenticated = status;
      state.userName = userName;
      state.token = token; // Simpan token
      localStorage.setItem(storageKey, JSON.stringify({ isAuthenticated: status, userName, token }));
    },
    initializeStore(state) {
      const savedState = JSON.parse(localStorage.getItem(storageKey));
      if (savedState) {
        state.isAuthenticated = savedState.isAuthenticated;
        state.userName = savedState.userName;
        state.token = savedState.token; // Ambil token dari storage
      }
    },
  },
  actions: {
    async login({ commit }, { userName, password }) {
      try {
        const response = await Login(userName, password);
        commit('setAuthentication', { status: true, userName: response.userName, token: response.token });
      } catch (error) {
        console.error('Login gagal:', error);
        throw error;
      }
    },
    logout({ commit }) {
      commit('setAuthentication', { status: false, userName: null, token: null });
      localStorage.removeItem(storageKey);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userName: (state) => state.userName,
    token: (state) => state.token, // Getter untuk token
  },
  modules: {
    destination,
  },
});
