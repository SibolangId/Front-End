import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Login", component: Login },
  { path: "/Register", component: Register },
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

createApp(App).use(router).mount("#app");
