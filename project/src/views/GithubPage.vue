
<template>
    <div class="github-page">
      <h1>Projet GitHub : Commentaire Work</h1>
      <p>
        Voici un lien vers le repository GitHub du projet :
        <a href="https://github.com/Slapsho/commentaire-work" target="_blank">Commentaire Work</a>
      </p>
      <div class="presentation">
        <h2>Présentation du Projet</h2>
        <p>
          <!-- Espace pour présentation -->
          Ce projet est un espace commentaire que j'ai du réalisé, ce fut mon dernier travail sans compter celui-ci. Ce travail consista à créer un formulaire valide. <br>
           Dans ce travail j'ai du mettre un message d'erreur en cas de réponses non valide, de faire en sorte que le message s'affiche à la fin sur la page et ne de pas modifier la page en elle même.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GithubPage'
  };
  </script>
  
  <style scoped>
  .github-page {
    padding: 20px;
  }
  
  .github-page h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .github-page p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .github-page .presentation {
    margin-top: 20px;
  }
  
  .github-page .presentation h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .github-page .presentation p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  </style>
  