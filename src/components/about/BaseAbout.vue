<template>
    <div class="container mx-auto mt-10 md:mt-20">
      <transition name="fade" mode="out-in">
        <h1 class="text-3xl md:text-5xl font-bold" data-aos="fade-up">About Us</h1>
      </transition>
      <Banner />
      <transition name="fade" mode="out-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-up">Our Missions</h2>
      </transition>
      <div v-for="(mission, index) in missionsList" :key="index"
           :data-aos="getAosAnimation(index)"
           :data-aos-delay="index * 200">
        <transition :name="index % 2 === 0 ? 'fade-right' : 'fade-left'" mode="out-in">
          <Mission :image="mission.image" :title="mission.title">
            <template v-slot>
              <p v-for="(item, idx) in formatDescription(mission.description)" :key="idx" class="text-lg mb-5">{{ item }}</p>
            </template>
          </Mission>
        </transition>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import Banner from './Banner.vue';
  import Mission from './mission.vue';
  
  const missionsList = [
    {
      image: "https://images.pexels.com/photos/17752016/pexels-photo-17752016/free-photo-of-smiling-couple-on-camping.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Menyediakan Informasi Wisata yang Komprehensif dan Terpercaya",
      description: "Misi pertama kami adalah mengurangi pemborosan makanan dengan melibatkan bisnis kuliner dan toko makanan dalam redistribusi makanan sisa kepada mereka yang membutuhkan.\nKami akan membentuk kemitraan yang kuat dengan pelaku industri makanan, menyusun pedoman distribusi yang aman, dan membangun platform web user-friendly.",
    },
    {
      image: "https://images.pexels.com/photos/5256818/pexels-photo-5256818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Mendukung Pertumbuhan Industri Wisata",
      description: "Misi kedua kami adalah menciptakan akses makanan yang adil dan berkelanjutan melalui pengembangan platform web. Kami akan memastikan inklusivitas platform dengan memperhatikan aksesibilitas bagi semua lapisan masyarakat.\nDengan berkolaborasi dengan LSM dan komunitas, kami ingin memastikan bahwa makanan yang didistribusikan mencapai mereka yang paling membutuhkan.",
    },
    {
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Meningkatkan Pengalaman Wisata Pengguna",
      description: "Misi ketiga dalam proyek ini bertujuan untuk meningkatkan pendidikan dan kesadaran masyarakat tentang pentingnya mengurangi pemborosan makanan.\nMelalui kampanye edukatif dan kegiatan sosialisasi, kami berkomitmen untuk menyampaikan informasi tentang dampak negatif pemborosan makanan terhadap lingkungan dan masyarakat.",
    },
  ];
  
  function formatDescription(description) {
    return description ? description.split(/\n\n?/) : ["Tidak ada deskripsi"];
  }
  
  function getAosAnimation(index) {
    switch (index % 3) {
      case 0:
        return 'fade-right';
      case 1:
        return 'fade-left';
      case 2:
        return 'fade-up';
    }
  }
  
  onMounted(() => {
    AOS.init({
      duration: 700, // Durasi animasi dalam milidetik
    });
  });
  </script>
  
  
  <style scoped>
  /* Tailwind CSS classes can be used directly in the template */
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .fade-right-enter-active, .fade-right-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  .fade-right-enter, .fade-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  
  .fade-left-enter-active, .fade-left-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  .fade-left-enter, .fade-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  </style>
  