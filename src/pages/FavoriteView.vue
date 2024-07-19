<!-- src/pages/DestinationView.vue -->
<template>
    <Navbar />
    <div class="mt-20 px-4">
    <div class="flex flex-col items-start mb-4">
        <h1 class="text-2xl font-bold mb-2">Yeay kamu pasti sudah siap</h1>
        <h2 class="text-lg mb-4">Persiapkan dirimu dan selalu jaga kesehatan ya</h2>
    </div>
    <div class="destination-list grid grid-cols-1 md:grid-cols-2 gap-4">
        <DestinationCard
        v-for="destination in limitedDestinations"
        :key="destination.destination_id"
        :destination="destination"
        />
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DestinationCard from "@/components/destination/DestinationCard.vue";
import Navbar from '@/components/common/Navbar.vue';

export default {
    name: "DestinationView",
    components: {
    Navbar,
    DestinationCard,
    },
    computed: {
    ...mapGetters("destination", ["filteredDestinations"]),
    limitedDestinations() {
        // Mengambil hanya dua destinasi pertama
        return this.filteredDestinations.slice(0, 2);
    },
    },
    methods: {
    ...mapActions("destination", ["fetchDestinations", "setSearchQuery"]),
    handleSearch(query) {
        this.setSearchQuery(query);
    },
    },
    created() {
    this.fetchDestinations();
    },
};
</script>

<style scoped>
.destination-list {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4;
    max-width: 500px; /* Atur lebar maksimum grid container */
    margin-left: 0;   /* Tidak ada margin kiri */
    margin-right: 0;  /* Tidak ada margin kanan */
}
</style>
