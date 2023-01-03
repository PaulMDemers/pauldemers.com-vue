<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">PaulDemers.com</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link v-bind:class="{'nav-link' : true, 'active' : isPage('/blog')}" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:class="{'nav-link' : true, 'active' : isPage('/projects')}" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:class="{'nav-link' : true, 'active' : isPage('/resume')}" to="/resume">Resume</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view class="mt-2 mb-2"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    isPage(page) {
      console.log(page);
      console.log(this.$router.history.current.path);
      return this.$router.history.current.path == page;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
