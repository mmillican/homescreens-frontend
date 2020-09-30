import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Upload from '@/views/images/Upload.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload', name: 'uploadImage', component: Upload
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
});

export default router;
