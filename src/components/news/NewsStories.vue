<template>
  <section>
    <h2>News</h2>
    <NewsSearch :onSearch="handleSearch" :search="search"/>
    <Loader :loading="loading"/>
    <pre v-show="error" class="error">
      {{error}}
    </pre>
    <p v-if="search">Searching for &quot;{{ search }}&quot;</p>
    <div>
      <ul v-if="news">
        <NewsStory v-for="(newsItem, i) in news"
          :key="i"
          :newsItem="newsItem"/>
        <NewsStory/>
      </ul>
    </div>
  </section>
</template>

<script>
import api from '../../services/api.js';
import NewsStory from './NewsStory';
import NewsSearch from './NewsSearch';
import Loader from './Loader';

export default {
  data() {
    let search = this.$route.query.search;
    return {
      news: null,
      loading: false,
      error: null,
      search: search ? decodeURIComponent(search) : ''
    };
  },
  components: {
    NewsSearch,
    NewsStory,
    Loader
  },
  created() {
    this.searchNews();
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      this.handleSearch(decodeURIComponent(newSearch));
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchNews();
    },
    searchNews() {
      this.loading = true;
      this.error = null;

      api.getNews(this.search)
        .then(response => {
          this.news = response.articles;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    }
  }
};
</script>

<style>

</style>
