<template>
    <div>
      <section id="presentation">
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>
      </section>
  
      <section id="creations">
        <h2>Mes Créations</h2>
        <div class="creations">
          <div 
            v-for="creation in creations" 
            :key="creation.id" 
            class="creation" 
            @click="openModal(creation)">
            <img :src="creation.image" :alt="creation.title"/>
            <h3>{{ creation.title }}</h3>
          </div>
        </div>
      </section>
  
      <section id="contact">
        <h2>Contactez-moi</h2>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="contact.name" placeholder="Nom/Prénom" required />
          <input type="text" v-model="contact.subject" placeholder="Objet" required />
          <textarea v-model="contact.message" placeholder="Message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
  
      <Modal v-if="showModal" :creation="selectedCreation" @close="showModal = false"/>
    </div>
  </template>
  
  <script>
  import Modal from '../components/Modal.vue';
  
  export default {
    data() {
      return {
        name: 'Votre Nom',
        description: 'Courte présentation.',
        creations: [
          { id: 1, title: 'Création 1', image: 'image1.jpg', date: '2023', technologies: 'Vue, HTML, CSS', link: 'https://project1.com', repo: 'https://github.com/project1' },
          // Ajoutez plus de créations ici
        ],
        showModal: false,
        selectedCreation: null,
        contact: {
          name: '',
          subject: '',
          message: ''
        }
      };
    },
    methods: {
      openModal(creation) {
        this.selectedCreation = creation;
        this.showModal = true;
      },
      submitForm() {
        const email = import.meta.env.VITE_CONTACT_EMAIL;
        const mailtoLink = `mailto:${email}?subject=${this.contact.subject}&body=${this.contact.message}`;
        window.location.href = mailtoLink;
      }
    },
    components: {
      Modal
    }
  };
  </script>
  
  <style scoped>
  /* Styles pour la page d'accueil */
  </style>
  