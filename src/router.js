import Vue from 'vue';
import Router from 'vue-router';
import LoadingPage from './views/LoadingPage/LoadingPage.vue';
import LoginPage from './views/Login/LoginPage.vue';
import OpenReportPage from './views/OpenReport/OpenReportPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadingPage',
      component: LoadingPage
    },
    {
      path: '/loginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/openReportPage',
      name: 'OpenReportPage',
      component: OpenReportPage
    },
  ]
});
