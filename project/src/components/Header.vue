<template>
    <header>
      <img src="@/assets/logo.png" alt="Logo" @click="goHome" />
      <nav>
        <a href="#presentation" :class="{ active: isActive('presentation') }">Présentation</a>
        <a href="#creations" :class="{ active: isActive('creations') }">Créations</a>
        <a href="#contact" :class="{ active: isActive('contact') }">Contact</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/');
      },
      isActive(section) {
        return window.location.hash === `#${section}`;
      }
    }
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav a {
    margin: 0 10px;
  }
  nav a.active {
    text-decoration: underline;
  }
  </style>
  