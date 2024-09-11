<template>
  <div class="modal-overlay" @click.self="close" aria-modal="true" role="dialog">
    <div class="modal">
      <button @click="close" aria-label="Fermer la modale">Fermer</button>
      <h2>{{ creation.title }}</h2>
      <p v-if="creation.date">Date : {{ formatDate(creation.date) }}</p>
      <p v-if="creation.technologies">Technologies : {{ creation.technologies }}</p>
      <div class="links">
        <a v-if="creation.link" :href="creation.link" target="_blank" rel="noopener">Voir le projet</a>
        <a v-if="creation.repo" :href="creation.repo" target="_blank" rel="noopener">Voir le repo GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    creation: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-out;
}

button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.links a {
  display: inline-block;
  margin: 10px;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

.links a:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
