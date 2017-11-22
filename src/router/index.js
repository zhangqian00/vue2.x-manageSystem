import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Home from '../components/home/home.vue'; // 首页

Vue.use(Router);

export default new Router({
  routes: [
    // {path: '/',name: 'HelloWorld',component: HelloWorld},
    {name: 'default',path: '/',redirect: {name: 'home'}}, // 重定向
    {name: 'home',path: '/home',component: Home}, // 首页
  ]
});
