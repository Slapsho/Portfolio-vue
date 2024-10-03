<template>
  <div class="github-page">
    <h1>Projet GitHub : Commentaire Work</h1>
    <p>
      Voici un lien vers le repository GitHub du projet :
      <a href="https://github.com/Slapsho/commentaire-work" target="_blank" rel="noopener noreferrer">Commentaire Work</a>
    </p>
    <div class="presentation">
      <h2>Présentation du Projet</h2>
      <p>
        Ce projet est un espace de commentaire que j'ai réalisé. Il s'agit de mon dernier travail. 
        L'objectif était de créer un formulaire valide, avec un message d'erreur en cas de réponse non valide. Le message est affiché à la fin sans modifier la page initiale. 
        Le formulaire présent sur la première page de ce portfolio est une version légèrement modifiée de celui du devoir pour s'adapter au design global.
      </p>
      <p>
        Intitulé du devoir : Une agence gérant plusieurs sites web a demandé une mission utilisant uniquement le JavaScript, pour dynamiser un espace commentaire. Le but était de faire apparaître un nouveau commentaire dans la liste sans recharger la page.
      </p>

      <!-- Ajout d'un bouton pour ouvrir une modale avec plus de détails -->
      <button @click="openModal(detail1)">Voir détails du projet</button>
    </div>

    <!-- Modale pour afficher les détails du projet -->
    <transition name="fade">
      <div v-if="showModal" class="modal" @click.self="closeModal" aria-hidden="true">
        <div class="modal-content" @click.stop>
          <button class="close-modal" @click="closeModal" aria-label="Fermer la modale">&times;</button>
          <img :src="selectedDetail.image" :alt="selectedDetail.alt" />
          <p>{{ selectedDetail.description }}</p>
          <!-- Bouton pour plus d'informations dans la modale -->
          <button @click="openAdditionalInfo('Détails Formulaire', 'Explication sur la validation du formulaire et la dynamique de commentaires')">Voir plus de détails</button>
        </div>
      </div>
    </transition>

    <!-- Composant modale pour afficher des informations supplémentaires -->
    <ModalComponent v-if="showInfoModal" :title="modalTitle" :content="modalContent" @close="closeInfoModal" />
  </div>
</template>

<script>
import ModalComponent from '../components/ModalComponent.vue';

export default {
  name: 'GithubPage',
  components: {
    ModalComponent
  },
  data() {
    return {
      showModal: false,
      showInfoModal: false,
      selectedDetail: null,
      modalTitle: '',
      modalContent: '',
      detail1: {
        image: 'path/to/image1.png', // Remplacer par le chemin réel de l'image
        alt: 'Capture d\'écran du projet',
        description: 'Cette capture montre le formulaire de commentaire avec validation des champs.'
      }
    };
  },
  methods: {
    openModal(detail) {
      this.selectedDetail = detail;
      this.showModal = true;

      // Ajout d'un écouteur d'événements pour la touche "Esc"
      document.addEventListener('keydown', this.handleEscKey);
    },
    closeModal() {
      this.showModal = false;
      this.selectedDetail = null;

      // Suppression de l'écouteur d'événements pour la touche "Esc"
      document.removeEventListener('keydown', this.handleEscKey);
    },
    handleEscKey(event) {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    },
    openAdditionalInfo(title, content) {
      this.modalTitle = title;
      this.modalContent = content;
      this.showInfoModal = true;
    },
    closeInfoModal() {
      this.showInfoModal = false;
      this.modalTitle = '';
      this.modalContent = '';
    }
  }
};
</script>

<style scoped>
.github-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.github-page h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
}

.github-page p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
}

.github-page .presentation {
  margin-top: 20px;
}

.github-page .presentation h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.github-page .presentation p {
  font-size: 1.2em;
  line-height: 1.6;
  text-align: justify;
}

/* Styles pour la modal */
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

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

/* Transition fade pour la modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .github-page h1 {
    font-size: 2em;
  }

  .github-page .presentation h2 {
    font-size: 1.8em;
  }

  .github-page p {
    font-size: 1.1em;
  }
}
</style>
