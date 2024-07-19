<template>
    <section class="block md:grid grid-cols-2 gap-12 lg:gap-28 mx-auto py-[3em] max-w-screen-xl mt-20">
        <img
            :src="sendProps.image"
            class="mb-10 md:mb-0 rounded-3xl w-full h-full object-cover"
            loading="lazy"
            alt="Image"
        />
        <div class="flex flex-col justify-center ">
            <h2 class="font-bold text-[3em] mb-5">{{ sendProps.title }}</h2>
            <p class="mb-5 text-xl">{{ sendProps.description }}</p>
            <router-link to="/about">
            <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Baca Lebih Lanjut
            </button>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FirstMission',
    data() {
    return {
        sendProps: {
        image:
            'https://images.pexels.com/photos/5256818/pexels-photo-5256818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Sedikit Mengenai Kami',
        description:
            'SiBolang merupakan sebuah platform yang menyediakan informasi wisata yang lengkap dan dapat diandalkan untuk mempermudah perencanaan perjalanan. Dengan menggabungkan beragam sumber informasi destinasi dan layanan wisata, SiBolang membantu pengguna menemukan informasi yang mereka butuhkan dalam satu tempat. Platform ini dirancang untuk memberikan pengalaman pengguna yang optimal dengan rekomendasi yang dipersonalisasi sesuai dengan preferensi masing-masing individu.',
        },
    };
    },
};
</script>

<style scoped>
/* Anda dapat menambahkan CSS khusus di sini jika diperlukan */
</style>
