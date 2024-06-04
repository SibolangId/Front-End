<script>

import Hero from '@/components/Home/Hero.vue';
import Navbar from '@/components/common/Navbar.vue';
import Packages from '@/components/Home/Packages.vue';
import Reason from '@/components/Home/Reason.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    components: {
        Hero,
        Navbar,
        Packages,
        Reason,
        Footer
    },
};

</script>
<template>
    <Navbar />
    <Hero />
    <Packages />
    <Reason />
    <Footer />
  
</template>