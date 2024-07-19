<!-- src/components/common/SearchBar.vue -->
<template>
    <div class="relative w-full max-w-lg">
    <input
        type="text"
        v-model="searchQuery"
        @input="onSearch"
        placeholder="Search destinations..."
        class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
    <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z" clip-rule="evenodd" />
    </svg>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
    return {
        searchQuery: "",
    };
    },
    methods: {
    onSearch() {
        this.$emit("search", this.searchQuery);
    },
    },
};
</script>

<style scoped>
.search-bar {
    margin: 1rem;
    text-align: center;
}
</style>
