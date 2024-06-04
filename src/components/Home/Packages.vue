<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    mounted(){
        AOS.init();
    }
}

</script>
<template>
    <h2 class=" font-engplot text-[2rem] md:text-[2.6rem] text-center mt-8">Rekomendasi Destinasi Wisata Untukmu</h2>
    <p class=" font-engplot text-[1.1rem] md:text-[1.3rem] md:mt-[-0.7rem] text-center">Temukan Wisata sesuai Seleramu</p>
    <div class=" flex justify-center gap-9 flex-wrap w-[80%] mx-auto mt-5">
        <div class="package border-2 border-black" data-aos="zoom-in"> 
            <img src="/images/package-1.jpg" alt=""> 
            <div class="p-2">
                <p class="flex text-xs font-semibold text-cyan-700">Magelang | Jawa Tengah</p>
            <h3 class="font-bold">Candi Borobudur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur.</p>
            <p class="text-xs mt-2">
                <a href="#">Selengkapnya...</a>
            </p>
            </div>
        </div>
        <div class="package border-2 border-black" data-aos="zoom-in"> 
            <img src="/images/package-1.jpg" alt=""> 
            <div class="p-2">
                <p class="flex text-xs font-semibold text-cyan-700">Magelang | Jawa Tengah</p>
            <h3 class="font-bold">Candi Borobudur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur.</p>
            <p class="text-xs mt-2">
                <a href="#">Selengkapnya...</a>
            </p>
            </div>
        </div>
        <div class="package border-2 border-black" data-aos="zoom-in"> 
            <img src="/images/package-1.jpg" alt=""> 
            <div class="p-2">
                <p class="flex text-xs font-semibold text-cyan-700">Magelang | Jawa Tengah</p>
            <h3 class="font-bold">Candi Borobudur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur.</p>
            <p class="text-xs mt-2">
                <a href="#">Selengkapnya...</a>
            </p>
            </div>
        </div>
        <div class="package border-2 border-black" data-aos="zoom-in"> 
            <img src="/images/package-1.jpg" alt=""> 
            <div class="p-2">
                <p class="flex text-xs font-semibold text-cyan-700">Magelang | Jawa Tengah</p>
            <h3 class="font-bold">Candi Borobudur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur.</p>
            <p class="text-xs mt-2">
                <a href="#">Selengkapnya...</a>
            </p>
            </div>
        </div>
        <div class="package border-2 border-black" data-aos="zoom-in"> 
            <img src="/images/package-1.jpg" alt=""> 
            <div class="p-2">
                <p class="flex text-xs font-semibold text-cyan-700">Magelang | Jawa Tengah</p>
            <h3 class="font-bold">Candi Borobudur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur.</p>
            <p class="text-xs mt-2">
                <a href="#">Selengkapnya...</a>
            </p>
            </div>
        </div>
        <div class="package border-2 border-black" data-aos="zoom-in"> 
            <img src="/images/package-1.jpg" alt=""> 
            <div class="p-2">
                <p class="flex text-xs font-semibold text-cyan-700">Magelang | Jawa Tengah</p>
            <h3 class="font-bold">Candi Borobudur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur.</p>
            <p class="text-xs mt-2">
                <a href="#">Selengkapnya...</a>
            </p>
            </div>
        </div>
        <div class="package border-2 border-black" data-aos="zoom-in"> 
            <img src="/images/package-1.jpg" alt=""> 
            <div class="p-2">
                <p class="flex text-xs font-semibold text-cyan-700">Magelang | Jawa Tengah</p>
            <h3 class="font-bold">Candi Borobudur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur.</p>
            <p class="text-xs mt-2">
                <a href="#">Selengkapnya...</a>
            </p>
            </div>
        </div>
    </div>
</template>
<style>
.package {
    @apply bg-slate-100 w-[14rem] h-[20rem];
}
.package img {
    @apply w-full h-[10rem];
}
.package p{
    @apply font-engplot text-[0.8rem] px-1 ;
}
.package h3 {
    @apply font-engplot text-xl my-2;
}
</style>