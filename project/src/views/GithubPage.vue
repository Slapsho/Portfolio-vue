
<template>
    <div class="github-page">
      <h1>Projet GitHub : Commentaire Work</h1>
      <p>
        Voici un lien vers le repository GitHub du projet :
        <a href="https://github.com/Slapsho/commentaire-work" target="_blank" rel="noopener noreferrer">Commentaire Work</a>
      </p>
      <div class="presentation">
        <h2>Présentation du Projet</h2>
        <p>
  Ce projet est un espace de commentaire que j'ai réalisé. Il s'agit de mon dernier travail, sans compter celui-ci. 
  L'objectif était de créer un formulaire valide. Dans ce projet, j'ai dû ajouter un message d'erreur en cas de réponse non valide, 
  et faire en sorte que le message soit affiché à la fin, sans modifier la page initiale.
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
  max-width: 800px; 
  margin: 0 auto; 
  }
  
.github-page h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center; 
}

.github-page p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify; 
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
  text-align: justify;
}


@media (max-width: 768px) {
  .github-page h1 {
    font-size: 2em;
  }

  .github-page .presentation h2 {
    font-size: 1.8em;
  }

  .github-page p {
    font-size: 1.1em;
  }
}

</style>
  