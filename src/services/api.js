export default {
  getNews(searchTerm = '') {
    // eslint-disable-next-line
    const APIKEY = process.env.VUE_APP_APIKEY;
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}&q=${encodeURIComponent(searchTerm)}`)
    //   .then(response => {
    //     console.log('fetch complete', response);
    //   });

      .then(response => response.json());
    //   .then(news => {
    //     console.log(news);
    //   });
  }
};