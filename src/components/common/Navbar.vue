<template>
    <nav
        :class="{ 'navbar-color': scrollPosition > 50 || mobile }"
        class="z-50 duration-200 sticky top-0 flex items-center justify-between w-full h-[3rem] shadow-xl font-engplot">

        <svg @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }"
        class="transition-all duration-200 w-10 ml-5 md:hidden"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3 12L19 12M3 6L19 6M3 18L19 18"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

        <img
        class="h-[90%] md:ml-10 ml-5 mr-5"
        src="/public/images/Logo.png"
        alt="Logo" />

        <div class="flex items-center space-x-4 mr-5 ml-auto">
        <div
            class="flex-grow flex items-center justify-center h-[40px] p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative">
            <input
            type="search"
            class="flex-grow w-full h-auto px-4 bg-transparent border-none outline-none"
            placeholder="Search..."
            required />
            <button
            type="submit"
            class="flex items-center right-2.5 h-[30px] text-white bg-[#7FBCD2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[15px] px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
            </button>
        </div>

        <div class="hidden md:flex items-center space-x-4">
            <ul
            id="btn"
            class="flex items-center space-x-4 uppercase font-semibold font-engplot">
            <li>
                <button class="button p-2 w-auto">
                <router-link to="/Login">Sign In</router-link>
                </button>
            </li>
            <li>
                <button
                class="button p-2 w-auto bg-slate-700 text-[#ffffff] hover:transform: translateY(-1.5px); hover:text-[#311e39] hover:bg-gray-300">
                <router-link to="/Register">Sign Up</router-link>
                </button>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    <transition name="slide-fade">
        <ul
        id="dropdownNav"
        class="fixed w-[50%] h-full z-40 top-15 text-white pt-8 pb-4 bg-[#7FBCD2] flex flex-col gap-2 font-engplot items-center text-lg"
        v-show="mobileNav">
            <li class="li">Home</li>
            <li class="li">About</li>
            <li class="li">
                <router-link class="" to="/#location">Favorite</router-link>
            </li>
                <ul  class="btn flex items-center space-x-4 uppercase font-semibold font-engplot">
                    <li>
                        <button class="button p-2 w-auto">
                        <router-link to="/Login">Sign In</router-link>
                        </button>
                    </li>
                    <li>
                        <button
                        class="button p-2 w-auto bg-slate-700 text-[#ffffff] hover:transform: translateY(-1.5px); hover:text-[#311e39] hover:bg-gray-300">
                        <router-link to="/Register">Sign Up</router-link>
                        </button>
                    </li>
                </ul>
        </ul>
    </transition>
</template>

<!-- your script and style tags remain the same -->

<script>

export default {
    data() {
        return {
        mobile: false,
        scrolled: false,
        windowWidth: false,
        mobileNav: false,
        activePage: false,
        scrollPosition: 0,
        };
    },
    methods: {
        checkScreen() {
        this.windowWidth = window.innerWidth;
        this.mobile = this.windowWidth <= 750;
        },
        toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
        },
        onScroll() {
        this.scrollPosition = window.scrollY;
        },
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        const links = document.querySelectorAll("li a");
        links.forEach((link) => {
        link.addEventListener("click", (e) => {
            links.forEach((link) => link.classList.remove("active"));
            e.preventDefault();
            link.classList.add("active");
        });
        });
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.checkScreen);
        window.removeEventListener("scroll", this.onScroll);
    },
};
</script>

<style>
#dropdownNav .btn {
    position: absolute;
    bottom: 6em;
}

.button {
    background-color: transparent;
    border: 2px solid #1a1a1a;
    border-radius: 10px;
    color: #3b3b3b;
    display: inline-block;
    font-size: 16px;
    line-height: normal;
    outline: none;
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1);
}

.button:disabled {
    pointer-events: none;
}

.button:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-1.5px);
}

.button:active {
    box-shadow: none;
    transform: translateY(0);
}

#dropdownNav .li {
    @apply hover:bg-white hover:text-black w-[80%] rounded-lg text-center py-4 uppercase;
}

.icon-active {
    @apply rotate-180 transition-all duration-200;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.navbar-color {
    @apply bg-[#7FBCD2];
}

.router-link-active:focus,
.router-link-exact-active:focus {
    @apply text-black bg-white p-5;
}
</style>
