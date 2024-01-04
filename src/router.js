import Vue from 'vue';
import Router from 'vue-router';
import LoadingPage from './views/LoadingPage/LoadingPage.vue';
import LoginPage from './views/Login/LoginPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadingPage',
      // component: () => import('./views/LoadingPage/LoadingPage.vue')
      component: LoadingPage
    },
    {
      path: '/login-page',
      name: 'LoginPage',
      // component: () => import('./views/Login/LoginPage.vue')
      component: LoginPage
    }
  ]
});
