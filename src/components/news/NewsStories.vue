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
    return {
      news: null,
      search: ''
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

  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchNews();
    },
    searchNews() {
      api.getNews(this.search)
        .then(response => {
        // console.log(response.articles);
          this.news = response.articles;
        });
    }
  }
};
</script>

<style>

</style>
