<template>
  <div>
    <!-- Section de présentation -->
    <section id="presentation">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <p>
        <a :href="mapLink" target="_blank">{{ address }}</a>
      </p>
      <p>
        <a :href="phoneLink">{{ phone }}</a>
      </p>
      <p>
        <a :href="mailtoLink">{{ contactEmail }}</a>
      </p>
      <br>
      <router-link to="/about">À propos de moi</router-link>
    </section>

    <!-- Section de créations -->
    <section id="creations">
      <h2>Mes Créations</h2>
      <p>Petit détail concernant le cv je l'ai modifié pour qu'il corresponde à l'ambiance du portfolio</p>
      <div class="creations">
        <div v-for="creation in creations" :key="creation.id" class="creation">
          <img :src="creation.image" :alt="creation.title" @error="handleImageError($event)" @click="openModal(creation)" />
          <h3>{{ creation.title }}</h3>
          <button @click="openModal(creation)">Voir les détails</button>
        </div>
      </div>
    </section>

    <!-- Modal pour afficher les créations -->
    <transition name="fade">
      <div v-if="showModal" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-modal" @click="closeModal">&times;</button>
          <component :is="selectedComponent" v-bind="selectedProps"></component>
        </div>
      </div>
    </transition>

    <!-- Section de contact avec formulaire -->
    <section id="contact">
      <h2>Contactez-moi</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="formData.name" placeholder="Votre nom" required />
        <input type="email" v-model="formData.email" placeholder="Votre email" required />
        <textarea v-model="formData.message" placeholder="Votre message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <p v-if="confirmationMessage" class="confirmation-message">{{ confirmationMessage }}</p>
    </section>
  </div>
</template>

<script>
import CvView from '../components/CvView.vue';
import GithubPage from '../components/GithubPage.vue';
import WorkView from '../components/WorkView.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      name: 'Victor Sannier',
      description: 'Développeur web débutant basé à Rouen.',
      address: 'Rouen',
      phone: '06 69 38 31 70',
      contactEmail: 'victor.sannier@example.com',
      mapLink: 'https://www.google.com/maps?q=Rouen',
      phoneLink: 'tel:+33669383170',
      mailtoLink: 'mailto:victor.sannier@example.com',
      showModal: false,
      selectedComponent: null,
      selectedProps: {}, 
      creations: [
        {
          id: 1,
          title: 'Github',
          component: GithubPage,
          image: '/path/to/github.jpg',
          description: 'Voici mon profil Github.'
        },
        {
          id: 2,
          title: 'Charges',
          component: WorkView,
          image: '/path/to/work.jpg',
          description: 'Voici mon projet Charges.'
        },
        {
          id: 3,
          title: 'Mon CV',
          component: CvView,
          image: '/path/to/cv.jpg',
          description: 'Voici mon CV complet.'
        }
      ],
      formData: {
        name: '',
        email: '',
        message: ''
      },
      confirmationMessage: ''
    };
  },
  methods: {
    openModal(creation) {
      this.selectedComponent = creation.component;
      this.selectedProps = { title: creation.title, description: creation.description };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedComponent = null;
      this.selectedProps = {};
    },
    handleImageError(event) {
      event.target.src = 'path/to/placeholder-image.jpg';
    },
    submitForm() {
      this.confirmationMessage = `Merci ${this.formData.name}, votre message a bien été envoyé !`;
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
#presentation {
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 8px;
}

#presentation h1 {
  font-size: 2.5rem;
  color: #333;
}

#creations {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.creation {
  flex: 0 1 30%;
  text-align: center;
  margin-bottom: 20px;
}

.creation img {
  max-width: 100%;
  border-radius: 8px;
  transition: transform 0.3s;
}

.creation img:hover {
  transform: scale(1.05);
}

/* Style pour la modal */
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
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
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

#contact {
  margin-top: 50px;
  background-color: #ececec;
  padding: 20px;
  border-radius: 8px;
}

#contact form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#contact input, #contact textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

#contact button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

#contact button:hover {
  background-color: #555;
}

.confirmation-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .creation {
    flex: 0 1 100%;
  }
}
</style>
