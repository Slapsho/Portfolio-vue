<template>
  <footer>
    <div>
      <a href="https://github.com/victorsannier" target="_blank" class="footer-icon">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/victorsannier" target="_blank" class="footer-icon">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/victorsannier" target="_blank" class="footer-icon">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://facebook.com/victorsannier" target="_blank" class="footer-icon">
        <i class="fab fa-facebook"></i>
      </a>
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

.footer-icon {
  margin: 0 10px;
  font-size: 1.5rem;
  color: #333;
  transition: opacity 0.3s ease;
}

.footer-icon:hover {
  opacity: 0.5;
}
</style>
