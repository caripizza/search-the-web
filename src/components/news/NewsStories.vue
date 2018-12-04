<template>
  <div>
    <ul v-if="news">
      <NewsStory v-for="(newsItem, i) in news"
        :key="i"
        :newsItem="newsItem"/>
      <NewsStory/>
    </ul>
  </div>
</template>

<script>
import api from '../../services/api.js';
import NewsStory from './NewsStory';

export default {
  data() {
    return {
      news: Array
    };
  },
  components: {
    NewsStory
  },
  created() {
    api.getNews()
      .then(response => {
        // console.log(response.articles);
        this.news = response.articles;
      });
  }
};
</script>

<style>

</style>
