// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
Vue.config.productionTip = false;
import Vue from 'vue';
import App from './App';
import router from './router/index.js'; // 路由
import '../static/css/global.css'; // 引入自己的样式
import ElementUi from 'element-ui'; // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'; // 引入element-ui样式
Vue.use(ElementUi); // 使用element第三方组件
import Mock from 'mockjs'; // 引入mock.js
Vue.prototype.$mock = Mock; // 将mock方法加入到vue原型上

// 注册全局公共组件
import Aside from './components/public/aside.vue'; // 侧边栏
Vue.component('v-aside',Aside);
import Header from './components/public/header.vue'; // 头部
Vue.component('v-header',Header);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
