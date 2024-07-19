<template>
  <div class="max-w-3xl mx-auto mt-8">
    <Disclosure>
      <template #default="{ open }">
        <DisclosureButton class="w-full text-left flex items-center justify-between bg-white shadow-md rounded p-6">
          <h2 class="text-2xl font-bold">Tambahkan Tempat</h2>
          <span :class="{ 'transform rotate-180': open }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 11-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z" clip-rule="evenodd" />
            </svg>
          </span>
        </DisclosureButton>
        <DisclosurePanel>
          <form @submit.prevent="submitForm" class="mt-6">
            <div class="mb-6">
              <label for="name" class="block text-lg font-medium text-gray-700">Nama Tempat:</label>
              <input type="text" v-model="form.name" required class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div class="mb-6">
              <label for="location" class="block text-lg font-medium text-gray-700">Link Google Maps:</label>
              <input type="text" v-model="form.location" required class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div class="mb-6">
              <label for="description" class="block text-lg font-medium text-gray-700">Deskripsi:</label>
              <textarea v-model="form.description" required class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div class="mb-6">
              <label for="image" class="block text-lg font-medium text-gray-700">Gambar Tempat:</label>
              <input type="file" @change="handleFileUpload" required class="mt-2 block w-full text-lg text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <button type="submit" class="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Tambahkan Tempat</button>
          </form>
        </DisclosurePanel>
      </template>
    </Disclosure>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { mapActions } from 'vuex';

export default {
  name: 'DestinationForm',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  data() {
    return {
      form: {
        name: '',
        location: '',
        description: '',
        image: null,
      },
    };
  },
  methods: {
    ...mapActions('destination', ['addDestination']),
    async submitForm() {
      let formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('location', this.form.location);
      formData.append('description', this.form.description);
      formData.append('image', this.form.image);

      try {
        await this.addDestination(formData);
        this.$emit('place-added');
        this.form.name = '';
        this.form.location = '';
        this.form.description = '';
        this.form.image = null;
      } catch (error) {
        console.error("Gagal menambahkan destinasi:", error);
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.form.image = file;
    }
  },
};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
