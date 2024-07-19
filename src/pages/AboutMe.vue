<template>
    <div>
        <Navbar />
        <div class="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <BaseAbout />
        </div>
        <Footer />
    </div>
</template>

<script>
import BaseAbout from "@/components/about/BaseAbout.vue";
import Navbar from '@/components/common/Navbar.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    name: "AboutMe",
    components: {
        Navbar,
        BaseAbout,
        Footer,
    },
};
</script>

<style scoped>
/* Tambahkan gaya khusus untuk halaman AboutMe jika diperlukan */
</style>
