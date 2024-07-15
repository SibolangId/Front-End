<template>
  <div>
    <nav
      class="bg-gray-900 p-2 fixed top-0 left-0 right-0 shadow-lg flex items-center z-50">
      <img src="/public/images/Logo.png" alt="Logo" class="h-10 w-auto" />
      <div class="container mx-auto flex items-center">
        <div class="flex space-x-4 ml-4" v-if="!isMobile">
          <a href="/" class="text-gray-300 hover:text-white" @click="navigateToHome">HOME</a>
          <a href="#" class="text-gray-300 hover:text-white" @click="navigateToDestination">DESTINATION</a>
        </div>
        <div class="ml-auto flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search or jump to..."
            class="p-2 rounded bg-gray-800 text-gray-300 placeholder-gray-500"
            v-if="!isMobile" />
          <template v-if="isAuthenticated">
            <div class="flex items-center">
              <a class="text-gray-200 font-bold mr-4">{{ userName }}</a>
            </div>
          </template>
          <template v-else>
            <button @click="navigateToLogin" class="signin-button text-white">
              Sign in
            </button>
            <button
              v-if="!isMobile"
              @click="navigateToRegister"
              class="signup-button text-white">
              Sign up
            </button>
          </template>
        </div>
      </div>
      <button v-if="isMobile" @click="toggleSidebar" class="text-white ml-4">
        <svg
          v-if="!isSidebarOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg
          v-if="isSidebarOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
    <div
      v-show="isSidebarOpen && isMobile"
      class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur z-40"
      @click="toggleSidebar"></div>
      
    <aside
      v-show="isMobile"
      :class="['fixed top-14 right-0 w-64 bg-gray-800 shadow-lg transform rounded-lg', {'translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen}]"
      class="transition-transform duration-300 ease-in-out z-50">
      <div class="p-4 flex flex-col justify-between h-full">
        <div>
          <ul>
            <li class="mt-1 mb-2">
              <p class="text-gray-200 mr-4">{{ userName }}</p>
            </li>
            <li class="mb-2">
              <a href="/" class="text-gray-300 hover:text-white" @click="navigateToHome">HOME</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-300 hover:text-white" @click="navigateToDestination">DESTINATION</a>
            </li>
          </ul>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search or jump to..."
            class="p-2 rounded bg-gray-900 text-gray-300 placeholder-gray-400 w-full mb-4" />
          <template v-if="isAuthenticated">
            <div class="flex items-center">
              <button
                @click="logout"
                class="signin-button text-white w-full mb-2 ring-2 ring-slate-900">
                Logout
              </button>
            </div>
          </template>
          <template v-else>
            <button
              @click="navigateToLogin"
              class="signin-button text-white w-full mb-2">
              Sign in
            </button>
            <button
              @click="navigateToRegister"
              class="signup-button text-white w-full">
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
      this.$router.push('/##');
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

<style scoped>
/* Tambahkan style tambahan jika diperlukan */
.signin-button,
.signup-button {
  padding: 0.5rem 1rem;
  border-radius: 0.45rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.signin-button {
  background-color: #1f2937; /* Warna abu-abu gelap */
}

.signup-button {
  background-color: #a29df3; /* Warna biru */
}

.signin-button:hover {
  background-color: #4b5563; /* Warna abu-abu lebih terang */
  transform: translateY(-2px); /* Efek melayang */
}

.signup-button:hover {
  background-color: #6366f1; /* Warna biru lebih terang */
  transform: translateY(-2px); /* Efek melayang */
}

.container {
  flex-grow: 1;
}

aside {
  height: calc(100% - 100px); /* Sesuaikan tinggi sidebar */
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

aside ul li a {
  padding: 0.75rem; /* Sesuaikan padding link */
  display: block;
}

.backdrop-blur {
  backdrop-filter: blur(3px);
}
</style>
