// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueJsonp from 'vue-jsonp';
import VueResource from 'vue-resource';
import axios from 'axios';
import './style/public.scss';
Vue.prototype.$axios = axios;
Vue.use(VueJsonp);
Vue.use(VueResource);
Vue.config.productionTip = false;
//scroll组件
import Scroller from '@/components/scroller.vue';
Vue.component('Scroller',Scroller)
//loading组件
import Loading from '@/components/loading.vue';
Vue.component('Loading',Loading)
//vuex仓库
import store from './stores';
//mintui
import { MessageBox } from 'mint-ui';
Vue.prototype.$messagebox = MessageBox   
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
