import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login.vue'; // 登录页
import Home from '../components/home/home.vue'; // 首页
import UserCenter from '../components/userCenter/userCenter.vue'; // 个人中心

Vue.use(Router);

export default new Router({
  routes: [
    {name: 'default',path: '/',redirect: {name: 'login'}}, // 重定向
    {name: 'login',path: '/login',component: Login}, // 登录页
    {name: 'home',path: '/home',component: Home}, // 首页
    {name: 'userCenter',path: '/userCenter',component: UserCenter}, // 个人中心
  ]
});
