<template>
    <div>
        <ul v-if="news">
        <NewsStory v-for="(newsStory, i) in newsStories"
          :key="i"
          :newsStory="newsStory"
        />
        </ul>
    </div>
</template>

<script>
import api from '../../services/api.js';
// import NewsStory from './NewsStory';

export default {
  data() {
    return {
      news: null
    };
  },
  // components: {
  //   NewsStory
  // },
  created() {
    api.getNews();
  }
};
</script>

<style>

</style>
