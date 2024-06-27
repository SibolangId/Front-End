<template>
  <div
    class="bg-[url('/images/bg-banner.jpg')] bg-cover bg-no-repeat bg-center w-[100%] h-[80vh]
    flex justify-center items-center">
    <h1
      id="titler"
      class=" text-[2rem] md:text-[3rem] font-Logo text-white"></h1>
  </div>
</template>

<script>
import typer from 'typer-js'
export default {
  mounted(){
    typer('#titler').line('Selamat Datang di Si Bolang')
  }
};
</script>
