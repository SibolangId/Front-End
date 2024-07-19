<!-- src/pages/DestinationView.vue -->
<template>
  <Navbar />
  <div class="mt-20 px-4">
    <div class="flex flex-col items-start mb-4">
      <h1 class="text-2xl font-bold mb-2">Siapkan Perjalananmu</h1>
      <h2 class="text-lg mb-4">Temukan destinasi impianmu di Sibolang</h2>
      <SearchBar @search="handleSearch" />
    </div>
    <div class="destination-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <DestinationCard
        v-for="destination in filteredDestinations"
        :key="destination.destination_id"
        :destination="destination"
      />
    </div>
  </div>
  <Footer />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DestinationCard from "@/components/destination/DestinationCard.vue";
import Navbar from '@/components/common/Navbar.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: "DestinationView",
  components: {
    Navbar,
    DestinationCard,
    SearchBar,
    Footer,
  },
  computed: {
    ...mapGetters("destination", ["filteredDestinations"]),
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
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}
</style>
