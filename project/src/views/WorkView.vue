<template>
  <div>
    <h1>Mes Travaux sur les cahiers des charges</h1>
    <div class="présentation">
    <p>
      Voici un travail que j'ai du effectuer, il s'agit comme le nom l'indique d'un cahier des charges pour une socièté fictive de chaussettes. 
    </p>
    </div>
    <div class="gallery">
      <div 
        v-for="image in images" 
        :key="image.id" 
        class="gallery-item"
        @click="openModal(image)"
      >
        <img :src="image.src" :alt="image.alt" />
        <p>{{ image.description }}</p>
      </div>
    </div>

    <!-- Modale pour agrandir les images -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content">
        <img :src="selectedImage.src" :alt="selectedImage.alt" />
        <p>{{ selectedImage.description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import Charge1 from '@/assets/image.charges/Charges 1.png';
import Charge2 from '@/assets/image.charges/Charges 2.png';
import Charge3 from '@/assets/image.charges/Charges 3.png';
import Charge4 from '@/assets/image.charges/Charges 4.png';
import Charge5 from '@/assets/image.charges/Charges 5.png';
import Charge6 from '@/assets/image.charges/Charges 6.png';
import Charge7 from '@/assets/image.charges/Charges 7.png';

export default {
  data() {
    return {
      images: [
        { id: 1, src: Charge1, alt: 'Travail 1', description: 'Description du travail 1' },
        { id: 2, src: Charge2, alt: 'Travail 2', description: 'Description du travail 2' },
        { id: 3, src: Charge3, alt: 'Travail 3', description: 'Description du travail 3' },
        { id: 4, src: Charge4, alt: 'Travail 4', description: 'Description du travail 4' },
        { id: 5, src: Charge5, alt: 'Travail 5', description: 'Description du travail 5' },
        { id: 6, src: Charge6, alt: 'Travail 6', description: 'Description du travail 6' },
        { id: 7, src: Charge7, alt: 'Travail 7', description: 'Description du travail 7' },
      ],
      showModal: false,
      selectedImage: null
    };
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>




<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.modal-content p {
  margin-top: 10px;
  font-size: 1.2em;
  color: #333;
}

.modal-content img {
  cursor: zoom-out;
}
</style>
