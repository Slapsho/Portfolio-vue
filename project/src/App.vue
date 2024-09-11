<template>
  <div id="app">
    <!-- Peut inclure un en-tête ou d'autres éléments communs ici -->
    <header>
      <h1>Bienvenue sur mon portfolio</h1>
    </header>
    <!-- Affiche le contenu de la route actuelle -->
    <router-view></router-view>
    <!-- Pied de page -->
    <footer>
      <p>© 2024 Victor Sannier. Tous droits réservés.</p>
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

footer {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

footer p {
  margin: 0;
}

/* Ajuste le contenu principal pour prendre tout l'espace disponible */
router-view {
  flex-grow: 1;
}

/* Media queries pour une meilleure adaptabilité */
@media (max-width: 768px) {
  header {
    font-size: 1.2rem;
  }

  footer {
    font-size: 0.8rem;
  }
}
</style>
