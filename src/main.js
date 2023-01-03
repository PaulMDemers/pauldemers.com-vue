import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

Vue.config.productionTip = false

import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
const routes = [
  { path: '/', component: HomePage },
  { path: '/resume', component: ResumePage },
  { path: '/blog', component: BlogPage, props : { projectMode : false} },
  { path: '/blog/:page', component: BlogPage, props : { projectMode : false} },
  { path: '/projects', component: BlogPage, props : { projectMode : true} },
  { path: '/projects/:page', component: BlogPage, props : { projectMode : true} },
  { path: '/post/:postId', component: BlogPostPage }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
