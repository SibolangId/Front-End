<template>
    <div>
    <Navbar />
    <h1>Dashboard</h1>
    <DestinationForm @destination-added="fetchDestinations" />
    <Reason />
    <Footer />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DestinationForm from '@/components/destination/DestinationForm.vue';
import Navbar from '@/components/common/Navbar.vue';
import Reason from '@/components/Home/Reason.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    name: 'Dashboard',
    components: {
        Navbar,
        DestinationForm,
        Reason,
        Footer
    },
    computed: {
    ...mapGetters(['allDestinations']),
    },
    methods: {
    ...mapActions(['fetchDestinations']),
    },
    created() {
    this.fetchDestinations();
    },
};
</script>

<style scoped>
</style>
