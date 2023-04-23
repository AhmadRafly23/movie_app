import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MovieDetail from '../views/MovieDetail.vue';
import MovieList from '../views/MovieList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail,
  },
  {
    path: '/movies',
    name: 'MovieList',
    component: MovieList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
