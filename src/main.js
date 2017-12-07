import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './static/css/test.less'
import './static/css/test.scss'

import routerConfig from './router/routerConfig.js'
import store from './store/'

Vue.prototype.$ajax = axios;        // 扩展axios 请求数据

// Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routerConfig.routes,
    // mode: 'history'
});

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})
