<template>
  <div class="work-view">
    <h1>Mes Travaux sur les Cahiers des Charges</h1>
    <div class="presentation">
      <p>
        Voici un travail que j'ai dû effectuer : un cahier des charges pour une société fictive de chaussettes. Ce projet consiste à détailler les objectifs, contraintes, et autres aspects nécessaires pour la conception du site web.
      </p>
    </div>

    <!-- Galerie d'images avec aperçu des travaux -->
    <div class="gallery">
      <div
        v-for="image in images"
        :key="image.id"
        class="gallery-item"
        @click="openModal(image)"
        tabindex="0"
        @keydown.enter="openModal(image)"
      >
        <img :src="image.src" :alt="image.alt" />
        <p>{{ image.description }}</p>
      </div>
    </div>

    <!-- Modale pour afficher les détails des images -->
    <transition name="fade">
      <div v-if="showModal" class="modal" @click="closeModal" aria-hidden="true">
        <div class="modal-content" @click.stop>
          <button class="close-modal" @click="closeModal" aria-label="Fermer la modale">&times;</button>
          <img :src="selectedImage.src" :alt="selectedImage.alt" />
          <p>{{ selectedImage.description }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Charge1 from '@/assets/image.charges/Charges-1.png';
import Charge2 from '@/assets/image.charges/Charges-2.png';
import Charge3 from '@/assets/image.charges/Charges-3.png';
import Charge4 from '@/assets/image.charges/Charges-4.png';
import Charge5 from '@/assets/image.charges/Charges-5.png';
import Charge6 from '@/assets/image.charges/Charges-6.png';
import Charge7 from '@/assets/image.charges/Charges-7.png';

export default {
  name: 'WorkView',
  data() {
    return {
      images: [
        { id: 1, src: Charge1, alt: 'Travail 1', description: 'Page 1 : Introduction' },
        { id: 2, src: Charge2, alt: 'Travail 2', description: 'Page 2 : Suite introduction, liste des étapes et titre du 3 : analyse' },
        { id: 3, src: Charge3, alt: 'Travail 3', description: 'Page 3 : Analyse concurrent et clients' },
        { id: 4, src: Charge4, alt: 'Travail 4', description: 'Page 4 : Objectifs qualitatifs et quantitatifs ainsi que début du périmètre' },
        { id: 5, src: Charge5, alt: 'Travail 5', description: 'Page 5 : Périmètre suite et graphisme' },
        { id: 6, src: Charge6, alt: 'Travail 6', description: 'Page 6 : Contraintes, contenu et planning de travail' },
        { id: 7, src: Charge7, alt: 'Travail 7', description: 'Page 7 : Suite et résumé' },
      ],
      showModal: false,
      selectedImage: null,
    };
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>


<style scoped>
.work-view {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.presentation p {
  font-size: 1.2em;
  text-align: justify;
  margin-bottom: 20px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover,
.gallery-item:focus {
  transform: scale(1.05);
  outline: none;
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
  position: relative;
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

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }

  .presentation p {
    font-size: 1.1em;
  }

  .gallery-item img {
    max-width: 100%;
  }
}

/* Transition fade pour la modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
