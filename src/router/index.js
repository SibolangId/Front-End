import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/pages/Login.vue";
import Register from "@/components/pages/Register.vue";
import Home from "@/components/pages/Home.vue";
import AboutMe from "@/components/pages/AboutMe.vue";
import Dashboard from "@/components/pages/Dashboard.vue";  // Perhatikan bahwa nama file adalah Dasboard.vue
import DestinationComponent from "@/components/pages/DestinationView.vue"; 
import DestinationDetail from '@/components/pages/DestinationDetail.vue';
import FavoriteView from '@/components/pages/FavoriteView.vue';

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
      component: AboutMe,
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
    {
      path: '/destination/:id',
      name: 'destination-detail',
      component: DestinationDetail,
      props: true
    },
    {
      path: '/favorites', 
      name: 'favorites',
      component: FavoriteView,
    }
  ],
});
