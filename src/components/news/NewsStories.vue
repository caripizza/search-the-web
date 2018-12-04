<template>
  <section>
    <h2>News</h2>
  <NewsSearch :onSearch="handleSearch" :search="search"/>
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

export default {
  data() {
    let search = this.$route.query.search;
    return {
      news: null,
      search: search ? decodeURIComponent(search) : '',
      // search: decodeURIComponent(this.$route.query.search),
      total: 0
    };
  },
  components: {
    NewsSearch,
    NewsStory
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
      api.getNews(this.search)
        .then(response => {
          this.news = response.articles;
        });
    }
  }
};
</script>

<style>

</style>
