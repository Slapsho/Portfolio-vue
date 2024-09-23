<template>
  <div id="app">
    <!-- Header -->
    <header>
      <h1>Bienvenue sur mon portfolio</h1>
    </header>

    <!-- Contenu des routes -->
    <router-view></router-view>

    <!-- Footer avec icônes sociales et liens -->
    <footer>
      <p>© 2024 Victor Sannier. Tous droits réservés.</p>
      <div class="social-icons">
        <a 
          href="https://www.facebook.com/victorsannier" 
          target="_blank" 
          aria-label="Facebook" 
          class="social-link"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/victorsannier" 
          target="_blank" 
          aria-label="LinkedIn" 
          class="social-link"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a 
          href="https://github.com/victorsannier" 
          target="_blank" 
          aria-label="GitHub" 
          class="social-link"
        >
          <i class="fab fa-github"></i>
        </a>
        <a 
          href="https://twitter.com/victorsannier" 
          target="_blank" 
          aria-label="Twitter" 
          class="social-link"
        >
          <i class="fab fa-twitter"></i>
        </a>
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
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-link {
  font-size: 2rem;
  margin: 0 15px;
  color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-link:hover {
  opacity: 0.7;
  transform: scale(1.2);
}

.social-link i {
  font-size: 2rem;
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

  .social-link {
    font-size: 1.5rem;
    margin: 0 10px;
  }
}
</style>
