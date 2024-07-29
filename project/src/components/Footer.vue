<template>
    <footer>
      <div>
        <a href="https://github.com/votrecompte" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/votrecompte" target="_blank">LinkedIn</a>
      </div>
      <div>Dernière mise à jour : {{ lastUpdated }}</div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lastUpdated: new Date().toLocaleDateString()
      };
    }
  };
  </script>
  
  <style scoped>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  </style>
  