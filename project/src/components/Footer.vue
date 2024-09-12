<template>
  <footer>
    <div class="social-icons">
      <a 
        href="https://github.com/victorsannier" 
        target="_blank" 
        class="footer-icon"
        aria-label="GitHub"
      >
        <i class="fab fa-github"></i>
      </a>
      <a 
        href="https://linkedin.com/in/victorsannier" 
        target="_blank" 
        class="footer-icon"
        aria-label="LinkedIn"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a 
        href="https://twitter.com/victorsannier" 
        target="_blank" 
        class="footer-icon"
        aria-label="Twitter"
      >
        <i class="fab fa-twitter"></i>
      </a>
      <a 
        href="https://facebook.com/victorsannier" 
        target="_blank" 
        class="footer-icon"
        aria-label="Facebook"
      >
        <i class="fab fa-Facebook"></i>
      </a>
    </div>
    <div class="update-info">
      Dernière mise à jour : {{ lastUpdated }}
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      lastUpdated: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  }
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  color: #333;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.footer-icon {
  margin: 0 15px;
  font-size: 2rem;
  color: #333;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.footer-icon:hover {
  opacity: 0.7;
  transform: scale(1.1);
}

.update-info {
  font-size: 0.85rem;
  color: #666;
  margin-top: 10px;
}

/* Responsive styles */
@media (max-width: 768px) {
  footer {
    padding: 15px;
  }

  .footer-icon {
    margin: 0 10px;
    font-size: 1.5rem;
  }

  .update-info {
    font-size: 0.8rem;
  }
}
</style>
