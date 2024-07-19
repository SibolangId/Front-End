<template>
  <div>
    <nav class="bg-gray-900 p-4 fixed top-0 left-0 right-0 shadow-lg flex items-center z-50">
      <img src="/public/images/Logo.png" alt="Logo" class="h-10 w-auto mx-8" />
      <router-link to="/" class="text-gray-300 text-xl hover:text-white mx-[-1em] font-bold">SiBolang</router-link>
      <div class="container mx-10 flex items-center">
        <div class="flex space-x-9 ml-4" v-if="!isMobile">
          <router-link to="/destinations" class="text-gray-300 hover:text-white">Your Destination</router-link>
          <router-link to="/favorites" class="text-gray-300 hover:text-white">Your Favorite</router-link>
          <router-link to="/about" class="text-gray-300 hover:text-white">About Us</router-link>
        </div>
        <div class="ml-auto flex items-center space-x-4">
          <template v-if="isAuthenticated">
            <router-link v-if="!isMobile" to="/dashboard" class="text-gray-300 hover:text-white">Dashboard</router-link>
            <div v-if="!isMobile" class="relative">
              <img @click="toggleProfileMenu" src="public/images/Profil/user.png" alt="Profile Icon" class="h-6 w-6 rounded-full cursor-pointer" />
              <div v-if="isProfileMenuOpen" class="absolute right-0 z-10 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                <a @click="logout" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Logout</a>
              </div>
            </div>
          </template>
          <template v-else>
            <button v-if="!isMobile" @click="navigateToLogin" class="bg-gray-800 text-white py-2 px-4 rounded transition-transform transform hover:translate-y-[-2px] hover:bg-gray-600">Sign in</button>
            <button v-if="!isMobile" @click="navigateToRegister" class="bg-indigo-500 text-white py-2 px-4 rounded transition-transform transform hover:translate-y-[-2px] hover:bg-indigo-600">Sign up</button>
          </template>
        </div>
      </div>
      <button v-if="isMobile" @click="toggleSidebar" class="text-white ml-4">
        <svg v-if="!isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-if="isSidebarOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
    <div v-show="isSidebarOpen && isMobile" class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur z-40" @click="toggleSidebar"></div>

    <aside v-show="isMobile" :class="['fixed top-14 right-0 w-64 bg-gray-900 shadow-lg transform rounded-lg transition-transform duration-300 ease-in-out z-50', {'translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen}, 'h-[calc(90vh-56px)]']">
        <div class="p-4 flex flex-col h-full">
          <div class="flex-grow">
            <ul>
              <li class="mb-10"> <!-- Updated margin bottom -->
                <router-link to="/destinations" class="text-gray-300 hover:text-white">Your Destination</router-link>
              </li>
              <li class="mb-10"> <!-- Updated margin bottom -->
                <router-link to="/favorites" class="text-gray-300 hover:text-white">Your Favorite</router-link>
              </li>
              <li class="mb-10"> <!-- Updated margin bottom -->
                <router-link to="/about" class="text-gray-300 hover:text-white">About Us</router-link>
              </li>
            </ul>
          </div>
          <div class="mt-6"> <!-- Increased margin top -->
            <template v-if="isAuthenticated" >
              <div class="flex items-center justify-center space-x-2 ">
                <router-link to="/dashboard" class="text-gray-300 hover:text-white mt-2"> <!-- Added margin top -->
                  Dashboard
                </router-link>
                <div class="relative mt-2"> <!-- Adjusted margin top -->
                  <img @click="toggleProfileMenu" src="public/images/Profil/user.png" alt="Profile Icon" class="h-6 w-6 rounded-full  cursor-pointer" /> <!-- Increased icon size -->
                  <div v-if="isProfileMenuOpen" class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                    <a @click="logout" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Logout</a>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <button @click="navigateToLogin" class="bg-gray-800 text-white py-2 px-4 rounded w-full mb-3 transition-transform transform hover:translate-y-[-2px] hover:bg-gray-600"> <!-- Updated margin bottom -->
                Sign in
              </button>
              <button @click="navigateToRegister" class="bg-indigo-500 text-white py-2 px-4 rounded w-full transition-transform transform hover:translate-y-[-2px] hover:bg-indigo-600">
                Sign up
              </button>
            </template>
          </div>
        </div>
    </aside>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      isSidebarOpen: false,
      isMobile: false,
      isProfileMenuOpen: false,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'userName']),
  },
  methods: {
    ...mapActions(['logout']),
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1000;
    },
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToRegister() {
      this.$router.push('/register');
    },
    navigateToHome() {
      this.$router.push('/');
    },
    navigateToDestination() {
      this.$router.push('/destinations');
    },
    navigateToDashboard() {
      this.$router.push('/dashboard');
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
};
</script>
