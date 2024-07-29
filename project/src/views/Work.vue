<template>
    <div>
      <h1>Mes Travaux</h1>
      <div class="gallery">
        <div v-for="image in images" :key="image.id" class="gallery-item">
          <img :src="image.src" :alt="image.alt" />
          <p>{{ image.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { id: 1, src: '@/assets/work1.jpg', alt: 'Travail 1', description: 'Description du travail 1' },
          { id: 2, src: '@/assets/work2.jpg', alt: 'Travail 2', description: 'Description du travail 2' },
          // Ajoutez plus d'images ici
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
  
  .gallery-item {
    margin: 10px;
  }
  
  .gallery-item img {
    max-width: 100%;
    height: auto;
  }
  </style>
  