export default {
  getNews(searchTerm = '') {

    if(searchTerm.startsWith(undefined)) {
      return Promise.reject(new Error('There was an error'));
    }

    // eslint-disable-next-line
    const APIKEY = process.env.VUE_APP_APIKEY;
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}&q=${encodeURIComponent(searchTerm)}`)

      .then(response => response.json());
  }
};