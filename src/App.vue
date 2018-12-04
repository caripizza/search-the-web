<template>
  <div id="app">
    <Home msg="Welcome to the API search app!"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/news">News</RouterLink>
      </nav>
    <main>
      <RouterView></RouterView>
    </main>
    <footer>
      <a href="https://newsapi.org" target="_blank">Powered by News API</a>
    </footer>
  </div>
</template>

<script>
import Home from './components/home/Home';

export default {
  name: 'app',
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
