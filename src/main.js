import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import { Button, Radio,Tooltip } from 'element-ui';  // 引入element-ui 框架

import './static/css/test.less'
import './static/css/test.scss'

import routerConfig from './router/routerConfig.js'
import store from './store/'

Vue.prototype.$ajax = axios;        // 扩展axios 请求数据

Vue.use(Button);
Vue.use(Radio);
Vue.use(Tooltip);


Vue.use(VueRouter);
const router = new VueRouter({
    routes: routerConfig.routes,
    // mode: 'history'
});

router.beforeEach((to, from, next) => {   // 监听控制路由的钩子函数
  next();
  console.log(to,from);
});

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})

