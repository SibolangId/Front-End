<template>
    <section class="block md:grid grid-cols-2 gap-12 lg:gap-28 mb-10">
    <img
        :src="image"
        class="mb-6 md:mb-0 rounded-3xl w-full h-72 object-cover"
        alt="Mission Image"
    />
    <div class="flex flex-col justify-center">
        <h2 class="font-bold text-3xl mb-5">{{ title }}</h2>
        <slot></slot>
    </div>
    </section>
</template>

<script>
export default {
    name: "Mission",
    props: {
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    },
};
</script>

<style scoped>
/* Tailwind CSS classes can be used directly in the template */
</style>
