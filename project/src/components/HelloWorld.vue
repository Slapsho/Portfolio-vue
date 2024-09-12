<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Pour un guide complet et des recettes de configuration/customisation de ce projet, consultez la
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">documentation vue-cli</a>.
    </p>

    <section>
      <h3>Plugins CLI Installés</h3>
      <ul class="link-list">
        <li>
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Babel</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">ESLint</a>
        </li>
      </ul>
    </section>

    <section>
      <h3>Liens Essentiels</h3>
      <ul class="link-list">
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Documentation Vue</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum Vue</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Chat Communautaire</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter Vue</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Actualités Vue</a></li>
      </ul>
    </section>

    <section>
      <h3>Écosystème Vue</h3>
      <ul class="link-list">
        <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Vue Router</a></li>
        <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Vuex</a></li>
        <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Vue DevTools</a></li>
        <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Vue Loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
}

h3 {
  font-size: 1.8rem;
  color: #42b983;
  margin-top: 40px;
}

.link-list {
  list-style-type: none;
  padding: 0;
}

.link-list li {
  display: inline-block;
  margin: 10px 15px;
}

a {
  color: #42b983;
  font-size: 1rem;
  transition: color 0.3s ease;
}

a:hover {
  color: #35495e;
  text-decoration: underline;
}
</style>
