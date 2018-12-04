<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/news">News</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>

      <a href="https://newsapi.org" target="_blank">Powered by News API</a>
  </div>
</template>

<script>
export default {};
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
