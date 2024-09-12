<template>
  <div class="not-found">
    <img src="../assets/image/Error404.jpg" alt="404" class="error-image"/>
    <h1>Oups ! 404</h1>
    <p>La page que vous recherchez est introuvable.</p>
    <router-link to="/" class="home-button">Retour à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #343a40;
  text-align: center;
}

.error-image {
  max-width: 50%;
  margin-bottom: 20px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

h1 {
  font-size: 4em;
  margin-bottom: 10px;
  color: #ff6b6b;
}

p {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.home-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #343a40;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #495057;
}
</style>
