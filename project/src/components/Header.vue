<template>
  <header>
    <img src="@/assets/logo.png" alt="Logo" @click="goHome" />
    <nav>
      <a href="#presentation" :class="{ active: isActive('presentation') }">Présentation</a>
      <a href="#creations" :class="{ active: isActive('creations') }">Créations</a>
      <a href="#contact" :class="{ active: isActive('contact') }">Contact</a>
      <router-link to="/work" :class="{ active: isActiveRoute('/work') }">Travaux</router-link>
      <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/about">À propos de moi</router-link></li>
      <li><router-link to="/github-page">Projet GitHub</router-link></li>
      </ul>
      <div class="social-icons">
        <a href="https://github.com/victorsannier" target="_blank" class="header-icon">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/victorsannier" target="_blank" class="header-icon">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/victorsannier" target="_blank" class="header-icon">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com/victorsannier" target="_blank" class="header-icon">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
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
    },
    isActiveRoute(route) {
      return this.$route.path === route;
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

.social-icons {
  display: flex;
}

.header-icon {
  margin: 0 5px;
  font-size: 1.5rem;
  color: #333;
  transition: opacity 0.3s ease;
}

.header-icon:hover {
  opacity: 0.5;
}
</style>

