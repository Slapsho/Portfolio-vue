<template>
    <div class="not-found">
      <img src="../assets/image/Error404.jpg" alt="404" />
      <h1>404</h1>
      <p>Page non trouvée</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  .not-found img {
    max-width: 100%;
    height: auto;
  }
  </style>
  