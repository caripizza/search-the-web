<template>
  <section>
    <h2>News</h2>
    <NewsSearch :onSearch="handleSearch" :search="search"/>
    <Loader :loading="loading"/>
    <div>
      <ol v-if="news">
        <NewsStory v-for="(newsItem, i) in news"
          :key="i"
          :newsItem="newsItem"/>
        <NewsStory/>
      </ol>
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
      search: search ? decodeURIComponent(search) : '',
      // search: decodeURIComponent(this.$route.query.search),
      total: 0
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
      api.getNews(this.search)
        .then(response => {
          this.news = response.articles;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    }
  }
};
</script>

<style>

</style>
