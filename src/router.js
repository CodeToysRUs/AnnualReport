import Vue from 'vue';
import Router from 'vue-router';
import LoadingPage from './views/LoadingPage/LoadingPage.vue';
import LoginPage from './views/Login/LoginPage.vue';
import OpenReportPage from './views/OpenReport/OpenReportPage.vue';
import ReadingTime from './views/ReadingTime/ReadingTime.vue'
import ReadingTimeDetail from './views/ReadingTimeDetail/ReadingTimeDetail.vue'
import NotesDetail from './views/NotesDetail/NotesDetail.vue'
import ArticleNotes from './views/ArticleNotes/ArticleNotes.vue'
import BeforeAnswering from './views/BeforeAnswering/BeforeAnswering.vue'

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
    {
      path: '/readingTime',
      name: 'ReadingTime',
      component: ReadingTime
    },
    {
      path: '/readingTimeDetail',
      name: 'ReadingTimeDetail',
      component: ReadingTimeDetail
    },
    {
      path: '/notesDetail',
      name: 'NotesDetail',
      component: NotesDetail
    },
    {
      path: '/articleNotes',
      name: 'ArticleNotes',
      component: ArticleNotes
    },
    {
      path: '/beforeAnswering',
      name: 'BeforeAnswering',
      component: BeforeAnswering
    },
  ]
});
