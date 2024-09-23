<template>
    <div class="cv-container">
      <!-- Section de l'en-tête -->
      <header>
        <figure>
          <a href="https://lens.google.com/search?ep=gsbubb&hl=fr">
            <img src="@/assets/image/homme.png" alt="Portrait d'un homme roux barbu" />
          </a>
        </figure>
        <h1 class="titre">John Doe</h1>
        <h2 class="sous-titre">Développeur web</h2>
        <address class="adresse">
          <div class="adresse_lien_conteneur">
            <a href="https://www.google.fr/maps/dir//49.4403663,1.0933327">Pl. de la Cathédrale, 76000 Rouen</a>
          </div>
          <div class="adresse_lien_conteneur text-center">
            <a href="mailto:sanniervictor@gmail.com">sanniervictor@gmail.com</a>
          </div>
          <div class="adresse_lien_conteneur text-right">
            <a href="tel:0608060806">0608060806</a>
          </div>
        </address>
      </header>
  
      <!-- Section principale -->
      <main>
        <!-- Informations à gauche -->
        <section class="information_gauche">
          <div class="section_gauche text-left">
            <h1 class="categorie">À propos</h1>
            <p>Bonjour, je m'appelle John Doe, un jeune développeur à la recherche d'un emploi dans ce domaine. J'ai 19 ans et je suis travailleur.</p>
          </div>
          <div class="section_gauche text-left">
            <h1 class="categorie">Langues parlées</h1>
            <p>Français - langue maternelle</p>
            <p>Anglais - intermédiaire</p>
            <p>Allemand - débutant</p>
            <p>Italien - débutant</p>
          </div>
          <div class="section_gauche text-left">
            <h1 class="categorie">Centres d'intérêt</h1>
            <p>J'aime les films, les animes/mangas, les jeux vidéo et tout ce qui concerne le streaming/YouTube.</p>
          </div>
        </section>
  
        <!-- Informations au centre -->
        <section class="information_centre text-center">
          <div class="section_centre">
            <h1 class="categorie">Expériences professionnelles</h1>
            <p>Je n'ai pas encore d'expérience professionnelle.</p>
          </div>
          <div class="section_centre">
            <h1 class="categorie">Diplômes/Formation</h1>
            <p>J'ai obtenu mon brevet et mon baccalauréat.</p>
          </div>
          <div class="section_centre">
            <h1 class="categorie">Compétences</h1>
            <p>Bonne maîtrise de l'anglais et des compétences suffisantes dans le domaine du développement web.</p>
          </div>
        </section>
      </main>
  
      <!-- Pied de page -->
      <footer>
        <section class="text-center">
          <p>Dernière mise à jour le 11/10/2023</p>
          <div class="logo_reseaux_sociaux">
            <a href="https://twitter.com/"><img src="@/assets/image/x-logo-twitter-elon-musk.webp" alt="logo X" /></a>
            <a href="https://fr.linkedin.com/"><img src="@/assets/image/linkdin.jpeg" alt="logo LinkedIn" /></a>
            <a href="https://github.com/Slapsho/test-CV"><img src="@/assets/image/github.jpeg" alt="logo GitHub" /></a>
          </div>
        </section>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CvView',
  };
  </script>
  
  <style scoped>
  html {
      background-color: #f0f0f0;
  }
  
  body {
      width: 80%;
      margin: 0 auto;
      background-color: #fff;
      font-family: "Raleway", sans-serif; /* Correction : "Raleway-VariableFont" changé en "Raleway" pour être plus standard */
      color: #333;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      padding: 20px;
  }
  
  /* Figure */
  figure {
      width: 150px;
      height: 150px;
      margin-top: 20px;
      background-color: #e7e7e7;
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  figure img {
      width: 100%;
      height: auto;
      object-fit: cover;
  }
  
  /* Typographie */
  h1,
  h2,
  h3 {
      font-family: "Lato", sans-serif; /* Correction : "Lato-BlackItalic" remplacé par "Lato" pour cohérence */
      color: #333;
  }
  
  h1.titre {
      font-size: 36px;
      margin: 10px 0;
  }
  
  h2.sous-titre {
      font-size: 24px;
      color: #555;
  }
  
  /* Catégorie */
  .categorie {
      font-size: 20px;
      background-color: #f8f8f8;
      padding: 10px;
      border-left: 4px solid #6a1b9a;
      margin-bottom: 10px;
      color: #6a1b9a;
  }
  
  /* Section gauche */
  .information_gauche {
      background-color: #ffe082; /* Jaune clair */
      padding: 20px;
  }
  
  .section_gauche {
      margin-bottom: 20px;
  }
  
  /* Section centrale */
  .information_centre {
      background-color: #b39ddb; /* Violet clair */
      padding: 20px;
  }
  
  .section_centre {
      margin-bottom: 20px;
  }
  
  /* Adresse */
  .adresse {
      background-color: #333;
      color: #fff;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
  }
  
  .adresse a {
      color: #fff;
      text-decoration: none;
  }
  
  .adresse a:hover {
      text-decoration: underline; /* Ajouté un effet au survol pour une meilleure accessibilité */
  }
  
  /* Footer */
  footer {
      margin-top: 30px;
      text-align: center; /* Correction : Centrage du contenu du footer */
  }
  
  footer img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      transition: opacity 0.3s ease;
  }
  
  footer img:hover {
      opacity: 0.7;
  }
</style>