import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/pages/Login.vue";
import Register from "@/components/pages/Register.vue";
import Home from "@/components/pages/Home.vue";
import About from "@/components/pages/About.vue";
import Dashboard from "@/components/pages/Dashboard.vue";  // Perhatikan bahwa nama file adalah Dasboard.vue
import DestinationComponent from "@/components/pages/DestinationView.vue"; 

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,  // Menggunakan Dasboard.vue
    },
    {
      path: "/destinations",
      name: "Destinations",
      component: DestinationComponent,
    },
  ],
});
