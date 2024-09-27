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
        Ce projet est un espace de commentaire que j'ai réalisé. Il s'agit de mon dernier travail. 
        L'objectif était de créer un formulaire valide, avec un message d'erreur en cas de réponse non valide. Le message est affiché à la fin sans modifier la page initiale. 
        Le formulaire présent sur la première page de ce portfolio est une version légèrement modifiée de celui du devoir pour s'adapter au design global.
      </p>
      <p>
        Intitulé du devoir : Une agence gérant plusieurs sites web a demandé une mission utilisant uniquement le JavaScript, pour dynamiser un espace commentaire. Le but était de faire apparaître un nouveau commentaire dans la liste sans recharger la page.
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
