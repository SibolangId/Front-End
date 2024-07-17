<template>
    <div class="destination-card">
    <img :src="destination.image" alt="Destination Image" />
    <h3>{{ destination.name }}</h3>
    <p>{{ destination.description }}</p>
    <a :href="destination.location" target="_blank">Location</a>
    </div>
</template>

<script>
export default {
    name: "DestinationCard",
    props: {
    destination: {
        type: Object,
        required: true,
    },
    },
};
</script>

<style scoped>
.destination-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    text-align: center;
}
.destination-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>
