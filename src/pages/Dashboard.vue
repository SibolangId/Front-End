<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-8 mt-[4em]">
        <h1 class="text-3xl font-bold mb-1">Dashboard</h1>
        <p class="mb-4 font-semibold">Ayo perkenalkan wisatamu supaya banyak orang yang mengetahui</p>
  
        <div class="mb-8">
          <div>
            <h2 class="text-xl font-semibold mb-2">Total Tempat:</h2>
            <DestinationForm @destination-added="fetchDestinations" />
          </div>
        </div>
  
        <div v-if="allDestinations && allDestinations.length > 0">
            <h2 class="text-xl font-semibold mb-2">Daftar Destinasi:</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <DestinationCard v-for="destination in allDestinations" :key="destination.id" :destination="destination" />
            </div>
            </div>
            <div v-else>
            <p>Tidak ada destinasi yang tersedia saat ini.</p>
        </div>
      </div>
      <Reason />
      <Footer />
    </div>
  </template>
  
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import DestinationForm from '@/components/destination/DestinationForm.vue';
  import DestinationCard from '@/components/destination/DestinationCard.vue';
  import Navbar from '@/components/common/Navbar.vue';
  import Reason from '@/components/Home/Reason.vue';
  import Footer from '@/components/common/Footer.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      Navbar,
      DestinationForm,
      DestinationCard,
      Reason,
      Footer
    },
    computed: {
      ...mapGetters(['allDestinations']),
    },
    methods: {
  ...mapActions(['fetchDestinations']),
  async fetchData() {
    try {
      await this.fetchDestinations();
      console.log('Data destinations:', this.allDestinations); // Pastikan data destinations tercetak di console
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  }
},

    created() {
      this.fetchDestinations();
    },
  };
  </script>
  
  <style scoped>
  /* Styling sesuai kebutuhan */
  </style>
  