<template>
    <div class="container mx-auto px-4 max-w-screen-lg">
    <h2 class="font-semibold text-[2rem] md:text-[2.6rem] text-center mt-8">Rekomendasi Destinasi Wisata Untukmu</h2>
    <p class="font-engplot text-[1.1rem] md:text-[1.3rem] md:mt-[-0.7rem] text-center font-semibold mr-4 pt-4">
    Temukan Wisata sesuai Seleramu
    <router-link to="/destinations">
        <button class="bg-green-500 text-white px-1 py-[-1.2] rounded hover:bg-green-600 ml-[5em]">
            selengkapnya
        </button>
    </router-link>
</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <destination-card v-for="(destination, index) in limitedDestinations" :key="index" :destination="destination" />
    </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import DestinationCard from '@/components/destination/DestinationCard.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
    DestinationCard
    },
    computed: {
    ...mapGetters('destination', ['filteredDestinations']),
    limitedDestinations() {
        return this.filteredDestinations.slice(0, 6);
    }
    },
    methods: {
    async fetchDestinations() {
        await this.$store.dispatch('destination/fetchDestinations');
    }
    },
    mounted() {
    AOS.init();
    this.fetchDestinations();
    }
};
</script>

<style scoped>
.container {
    max-width: 1200px; /* Atur lebar maksimum container */
}

.package img {
    @apply w-full h-[10rem];
}
.package p {
    @apply font-engplot text-[0.8rem] px-1;
}
.package h3 {
    @apply font-engplot text-xl my-2;
}
</style>
