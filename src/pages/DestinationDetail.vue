<template>
    <div>
    <Navbar />
    <div class="mt-24 px-4">
        <h1 class="text-3xl font-bold mb-2">{{ destination?.name }}</h1>
        <img :src="getImageUrl(destination?.image_blob)" class="object-cover w-full h-64" alt="Destination Image" />
        <p class="mt-4">{{ destination?.description }}</p>
        <!-- Tambahkan detail lain sesuai kebutuhan -->
    </div>
    </div>
    <Footer />
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from '@/components/common/Navbar.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    name: "DestinationDetail",
    components: {
    Navbar,
    Footer,
    },
    computed: {
    ...mapGetters("destination", ["getDestinationById"]),
    destination() {
        return this.getDestinationById(this.$route.params.id);
    }
    },
    methods: {
    getImageUrl(imageBlob) {
        const baseUrl = "http://localhost:3000"; // URL dasar server Anda
        return `${baseUrl}${imageBlob}`;
    }
    },
    watch: {
    '$route.params.id': function() {
        // Refresh data when route changes
        this.destination = this.getDestinationById(this.$route.params.id);
    }
    }
};
</script>

<style scoped>
/* Tambahkan gaya khusus untuk halaman detail di sini */
</style>
