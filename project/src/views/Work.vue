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
          { id: 1, src:'@/assets/image.charges/Charges 1.png', alt: 'Travail 1', description: 'Description du travail 1' },
          { id: 2, src: '@/assets/image.charges/Charges 2.png', alt: 'Travail 2', description: 'Description du travail 2' },
          { id: 3, src: '@/assets/image.charges/Charges 3.png', alt: 'Travail 3', description: 'Description du travail 1' },
          { id: 4, src: '@/assets/image.charges/Charges 4.png', alt: 'Travail 4', description: 'Description du travail 1' },
          { id: 5, src: '@/assets/image.charges/Charges 5.png', alt: 'Travail 5', description: 'Description du travail 1' },
          { id: 6, src: '@/assets/image.charges/Charges 6.png', alt: 'Travail 6', description: 'Description du travail 1' },
          { id: 7, src: '@/assets/image.charges/Charges 7.png', alt: 'Travail 7', description: 'Description du travail 1' },
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
  