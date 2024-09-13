<template>
  <div>
    <!-- Section de présentation -->
    <section id="presentation">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <!-- Rendre l'adresse, le téléphone et l'e-mail cliquables -->
      <p>
        <a :href="mapLink" target="_blank">{{ address }}</a>
      </p>
      <p>
        <a :href="phoneLink">{{ phone }}</a>
      </p>
      <p>
        <a :href="mailtoLink">{{ contactEmail }}</a>
      </p>
    </section>

    <!-- Section de créations -->
    <section id="creations">
      <h2>Mes Créations</h2>
      <div class="creations">
        <div 
          v-for="creation in creations" 
          :key="creation.id" 
          class="creation">
          <!-- Utilisation de <router-link> pour rediriger vers des pages internes -->
          <router-link :to="creation.route">
            <img :src="creation.image" :alt="creation.title" @error="handleImageError($event)" />
            <h3>{{ creation.title }}</h3>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section de contact -->
    <section id="contact">
      <h2>Contactez-moi</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="contact.name" placeholder="Nom/Prénom" required />
        <input type="text" v-model="contact.subject" placeholder="Objet" required />
        <textarea v-model="contact.message" placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>

    <!-- Modal de création -->
    <Modal v-if="showModal" :creation="selectedCreation" @close="showModal = false"/>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      name: 'Victor Sannier',
      description: 'Développeur web débutant basé à Rouen.',
      address: 'Rouen',
      phone: '06 69 38 31 70',
      contactEmail: 'victor.sannier@example.com',
      showModal: false,
      selectedCreation: null,
      contact: {
        name: '',
        subject: '',
        message: ''
      },
      creations: [
        {
          id: 1,
          title: 'Github',
          image: './github-image.jpg',
          route: '/github'
        },
        {
          id: 2,
          title: 'Charges',
          image: './project/src/assets/image/Stationery Design Mockup Vector.png',
          route: '/work'
        }
      ]
    };
  },
  computed: {
    mapLink() {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.address)}`;
    },
    phoneLink() {
      return `tel:${this.phone.replace(/\s+/g, '')}`; 
    },
    mailtoLink() {
      return `mailto:${this.contactEmail}`;
    }
  },
  methods: {
    handleImageError(event) {
      event.target.src = 'path/to/placeholder-image.jpg'; 
    },
    submitForm() {
      if (!this.contact.name || !this.contact.subject || !this.contact.message) {
        alert('Tous les champs sont obligatoires.');
        return;
      }
      const email = import.meta.env.VITE_CONTACT_EMAIL;
      if (email) {
        const mailtoLink = `mailto:${email}?subject=${this.contact.subject}&body=${this.contact.message}`;
        window.location.href = mailtoLink;
      } else {
        console.error("L'email de contact n'est pas défini.");
      }
    }
  },
  components: {
    Modal
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

@media screen and (max-width: 768px) {
  .creation {
    flex: 0 1 100%;
  }
}
</style>