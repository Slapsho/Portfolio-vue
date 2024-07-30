<!-- src/views/About.vue -->
<template>
    <div class="about">
      <h1>À propos de moi</h1>
      <p>
        Bonjour, je m'appelle Victor Sannier et je suis un développeur débutant passionné basé à Rouen.
        J'ai une expérience dans le développement front-end avec des technologies comme Vue.js, HTML5, CSS3, et JavaScript.
        Mon objectif est de créer des applications web performantes, intuitives et esthétiques.
      </p>
      <p>
        Vous trouverez sur ce site quelques-unes de mes créations, ainsi qu'un formulaire pour me contacter.
        N'hésitez pas à parcourir les différentes sections et à me faire part de vos retours.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  };
  </script>
  
  <style scoped>
  .about {
    padding: 20px;
  }
  
  .about h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .about p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  </style>
  