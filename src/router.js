import VueRouter from 'vue-router';
import Home from './components/home/Home';
import NewsStories from './components/news/NewsStories';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/news', component: NewsStories },
    { path: '*', redirect: '/' }
  ]
});