<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal">
        <button @click="close">Fermer</button>
        <h2>{{ creation.title }}</h2>
        <p>Date : {{ creation.date }}</p>
        <p>Technologies : {{ creation.technologies }}</p>
        <a :href="creation.link" target="_blank">Voir le projet</a>
        <a v-if="creation.repo" :href="creation.repo" target="_blank">Voir le repo GitHub</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      creation: Object
    },
    methods: {
      close() {
        this.$emit('close');
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
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }
  </style>
  