import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Dashboard from "./pages/Dashboard.vue";
import DestinationComponent from "./pages/DestinationView.vue";
import AboutMe from "./pages/AboutMe.vue";
import FavoriteView from "./pages/FavoriteView.vue";
import store from "./store";


const routes = [
  { path: "/", component: Home },
  { path: "/Login", component: Login },
  { path: "/Register", component: Register },
  { path: "/Dashboard", component: Dashboard },
  { path: "/destinations", component: DestinationComponent},
  { path: "/about", component: AboutMe},
  { path: "/favorites", component: FavoriteView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active-nav",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

import "./assets/style.css";

// Inisialisasi store dari local storage
store.commit("initializeStore");

createApp(App)
  .use(router)
  .use(store) // Gunakan store
  .mount("#app");
