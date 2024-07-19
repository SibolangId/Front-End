<template>
  <div class="package border rounded-lg shadow-lg bg-white" data-aos="zoom-in">
    <img :src="getImageUrl(destination.image_blob)" class="object-cover rounded-t-lg w-full h-48" alt="Destination Image" />
    <div class="p-4 relative">
      <p class="text-xs font-semibold text-cyan-700">
        <a :href="destination.location" target="_blank">View on Location</a>
      </p>
      <h3 class="font-bold text-lg mt-2">{{ destination.name }}</h3>
      <p class="line-clamp-3 mt-2">{{ destination.description }}</p>
      <p class="text-xs mt-2">
        <a :href="`/destination/${destination.destination_id}`">Selengkapnya...</a>
      </p>
      <button @click="toggleFavorite" class="absolute top-2 right-2">
        <svg v-if="isFavorite" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "DestinationCard",
  props: {
    destination: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters("destination", ["isFavorite"]),
    favoriteStatus() {
      return this.isFavorite(this.destination.destination_id);
    }
  },
  methods: {
    ...mapActions("destination", ["toggleFavorite"]),
    toggleFavorite() {
      this.toggleFavorite(this.destination);
    },
    getImageUrl(imageBlob) {
      const baseUrl = "http://localhost:3000"; // URL dasar server Anda
      return `${baseUrl}${imageBlob}`;
    }
  },
  mounted() {
    AOS.init();
  }
};
</script>

<style scoped>
.package img {
  @apply w-full h-48;
}
.package p {
  @apply text-xs px-1;
}
.package h3 {
  @apply text-lg my-2;
}

/* Menambahkan utilitas line-clamp */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

button {
  @apply focus:outline-none;
}
</style>
