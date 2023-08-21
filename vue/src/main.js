import Vue from 'vue'
import App from './App.vue'
import TypeNav from "@/components/TypeNav";
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination';
import { MessageBox } from 'element-ui';

import Vuex from 'vuex';
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import VueRouter from '@/router'
Vue.config.productionTip = false

import store from './store';

import { reqgetCategoryList } from './api';
import '@/mock/mockServe'
import 'swiper/swiper-bundle.min.css'
import * as API from '@/api'
reqgetCategoryList();
Vue.use(Vuex)
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router: VueRouter,
  store

}).$mount('#app')
