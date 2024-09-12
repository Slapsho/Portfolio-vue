<template>
  <div id="app">
    <!-- Header -->
    <header>
      <h1>Bienvenue sur mon portfolio</h1>
    </header>

    <!-- Contenu des routes -->
    <router-view></router-view>

    <!-- Footer avec icônes sociales -->
    <footer>
      <p>© 2024 Victor Sannier. Tous droits réservés.</p>
      <div class="social-icons">
        <img src="@/assets/image/facebook.jpg" alt="Facebook" class="social-icon">
        <img src="@/assets/image/linkdin.jpeg" alt="LinkedIn" class="social-icon">
        <img src="@/assets/image/github.jpeg" alt="GitHub" class="social-icon">
        <img src="@/assets/image/x-logo-twitter-elon-musk.webp" alt="X" class="social-icon">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Styles globaux */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #3498db;
  color: white;
  padding: 20px;
  font-size: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  margin-top: auto;
}

footer p {
  margin: 0;
}

.social-icons {
  margin-top: 10px;
}

.social-icon {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-icon:hover {
  opacity: 0.7;
  transform: scale(1.1);
}

/* Content should take all available space */
router-view {
  flex-grow: 1;
}

/* Media queries pour adaptabilité */
@media (max-width: 768px) {
  header {
    font-size: 1.2rem;
  }

  footer {
    font-size: 0.8rem;
  }

  .social-icon {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
}
</style>
