<template>
    <div class="card">
      <img :src="destination.imageUrl" alt="Destination Image" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ destination.name }}</h5>
        <p class="card-text">{{ destination.description }}</p>
        <a :href="destination.location" target="_blank" class="btn btn-primary">View on Google Maps</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DestinationCard',
    props: {
      destination: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    margin: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
  }
  .card-img-top {
    width: 100%;
    height: auto;
  }
  .card-body {
    padding: 1rem;
  }
  .card-title {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .card-text {
    margin-bottom: 1rem;
  }
  .btn {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    text-decoration: none;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  