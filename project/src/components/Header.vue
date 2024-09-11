<template>
  <header>
    <img 
      :src="require('../assets/image/CvVectorDesign.jpeg')" 
      alt="Logo" 
      @click="goHome" 
      class="logo"
    />
    <nav>
      <ul class="main-nav">
        <li><a href="#presentation" :class="{ active: isActive('presentation') }">Présentation</a></li>
        <li><a href="#creations" :class="{ active: isActive('creations') }">Créations</a></li>
        <li><a href="#contact" :class="{ active: isActive('contact') }">Contact</a></li>
        <li><router-link to="/work" :class="{ active: isActiveRoute('/work') }">Travaux</router-link></li>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/about">À propos de moi</router-link></li>
        <li><router-link to="/github-page">Projet GitHub</router-link></li>
      </ul>
      <div class="social-icons">
        <a href="https://github.com/victorsannier" target="_blank" class="header-icon" aria-label="GitHub">
          <img :src="require('../assets/image/github.jpeg')" alt="Logo GitHub">
        </a>
        <a href="https://linkedin.com/in/victorsannier" target="_blank" class="header-icon" aria-label="LinkedIn">
          <img :src="require('../assets/image/linkdin.jpeg')" alt="Logo LinkedIn">
        </a>
        <a href="https://twitter.com/victorsannier" target="_blank" class="header-icon" aria-label="Twitter">
          <img :src="require('../assets/image/x-logo-twitter-elon-musk.webp')" alt="Logo Twitter">
        </a>
        <a href="https://facebook.com/victorsannier" target="_blank" class="header-icon" aria-label="Facebook">
          <img :src="require('../assets/image/facebook.jpeg')" alt="Logo Facebook">
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
  padding: 10px 20px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 150px;
  cursor: pointer;
}

nav {
  display: flex;
  align-items: center;
}

.main-nav {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin: 0 15px;
}

nav a, .router-link {
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover, .router-link:hover {
  color: #007BFF;
}

nav a.active, .router-link.active {
  text-decoration: underline;
  font-weight: bold;
}

.social-icons {
  display: flex;
  margin-left: 20px;
}

.header-icon {
  margin: 0 10px;
  display: inline-block;
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.header-icon:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.header-icon img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .main-nav {
    flex-direction: column;
  }

  .main-nav li {
    margin: 10px 0;
  }
}
</style>
