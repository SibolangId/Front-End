<template>
    <section class="block lg:grid grid-cols-2 gap-20 mb-32">
    <div class="block lg:hidden mt-5 rounded-3xl" data-aos="fade-up">
        <img
        class="rounded-3xl"
        src="https://images.pexels.com/photos/5256818/pexels-photo-5256818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Banner Image"
        />
    </div>
    <div class="mt-5 text-lg" data-aos="fade-up" data-aos-delay="200">
        <p class="mb-5">
        SiBolang adalah platform yang menyediakan informasi wisata lengkap
        dan terpercaya untuk memudahkan perencanaan perjalanan. Dengan 
        mengintegrasikan berbagai sumber informasi destinasi dan layanan wisata, 
        SiBolang membantu pengguna menemukan detail yang mereka butuhkan dalam 
        satu tempat. Platform ini dirancang untuk memberikan pengalaman pengguna 
        yang unggul dengan rekomendasi personalisasi yang sesuai dengan preferensi 
        setiap individu.
        </p>
        <p class="mb-5">
        Selain itu, SiBolang memberikan peluang promosi efektif bagi pelaku industri wisata. Melalui fitur-fitur promosi yang ditingkatkan, pelaku usaha dapat memperluas jangkauan audiens dan meningkatkan pertumbuhan bisnis mereka. Informasi mengenai destinasi wisata yang lebih mendetail dan layanan yang beragam memungkinkan pelaku industri untuk menampilkan produk dan layanan mereka dengan lebih baik.
        </p>
        <p>
        Hasil dari pengembangan SiBolang adalah platform yang efisien dan user-friendly, dengan informasi destinasi yang lebih mendetail dan fitur promosi yang ditingkatkan. Ini diharapkan dapat mempermudah pengguna dalam merencanakan perjalanan dan membantu pelaku industri wisata mencapai audiens yang lebih luas.
        </p>
    </div>
    <div class="hidden lg:block h-full" data-aos="fade-up" data-aos-delay="400">
        <img
        style="border-radius: 35px;"
        class="h-full object-cover"
        src="https://images.pexels.com/photos/5256818/pexels-photo-5256818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Banner Image"
        />
    </div>
    </section>
</template>


<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init({
    duration: 700, // Durasi animasi dalam milidetik
    });
});
</script>
