<template>
    <div class="max-w-md mx-auto mt-8">
      <div class="bg-white shadow-md rounded p-4">
        <button @click="toggleForm" class="w-full text-left flex items-center justify-between">
          <h2 class="text-xl font-bold mb-2">Tambahkan Tempat</h2>
          <span :class="{'transform rotate-180': showForm}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 11-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <transition name="slide-fade">
          <form v-if="showForm" @submit.prevent="submitForm" class="mt-4">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Nama Tempat:</label>
              <input type="text" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div class="mb-4">
              <label for="location" class="block text-sm font-medium text-gray-700">Link Google Maps:</label>
              <input type="text" v-model="form.location" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div class="mb-4">
              <label for="description" class="block text-sm font-medium text-gray-700">Deskripsi:</label>
              <textarea v-model="form.description" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div class="mb-4">
              <label for="image" class="block text-sm font-medium text-gray-700">Gambar Tempat:</label>
              <input type="file" @change="handleFileUpload" required class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Tambahkan Tempat</button>
          </form>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'PlaceForm',
    data() {
      return {
        showForm: false,
        form: {
          name: '',
          location: '',
          description: '',
          image: null,
        },
      };
    },
    methods: {
      ...mapActions(['addPlace']),
      toggleForm() {
        this.showForm = !this.showForm;
      },
      async submitForm() {
        let formData = new FormData();
        formData.append('name', this.form.name);
        formData.append('location', this.form.location);
        formData.append('description', this.form.description);
        formData.append('image', this.form.image);
  
        await this.addPlace(formData);
  
        this.$emit('place-added');
        this.form.name = '';
        this.form.location = '';
        this.form.description = '';
        this.form.image = null;
        this.showForm = false; // Hide the form after submission
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        this.form.image = file;
      },
    },
  };
  </script>
  
  <style scoped>
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
  }
  </style>
  