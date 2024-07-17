<template>
    <div>
    <h1>Destinations</h1>
    <div class="destination-list">
        <DestinationCard
        v-for="destination in allDestinations"
        :key="destination.id"
        :destination="destination"
        />
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DestinationCard from '@/components/destination/DestinationCard.vue';

export default {
    name: 'DestinationComponent',
    components: {
    DestinationCard,
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
.destination-list {
    display: flex;
    flex-wrap: wrap;
}
</style>./Destinaton.vue
