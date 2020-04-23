import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Index.vue';
import Food from './views/food/Index.vue';
import Tech from './views/tech/Index.vue';
import ForEachAsync from './views/tech/articles/ForEachAsync.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/food',
      name: 'food',
      component: Food,
    },
    {
      path: '/tech',
      name: 'tech',
      component: Tech,
    },
    {
      path: '/tech/forEachAsync',
      name: 'forEachAsync',
      component: ForEachAsync,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
