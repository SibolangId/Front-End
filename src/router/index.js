import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/pages/Login.vue";
import Register from "@/components/pages/Register.vue";
import Home from "@/components/Home.vue";
import AddDestination from "@/components/AddDestination.vue";
import About from "@/components/About.vue";

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
      path: "/add-destination",
      name: "AddDestination",
      component: AddDestination,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});
