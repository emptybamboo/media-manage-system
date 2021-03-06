import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/border.css';
import './assets/css/reset.css';
import './assets/css/flex.css';
import './assets/css/basic.css';
import AXIOS from 'axios'
import Mock from 'mockjs'
import  * as custom from '../util/js/dateFilter'
import Qs from 'qs'
import axios from './api/api.js'   //引入axios文件夹

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$AXIOS = AXIOS
Vue.prototype.$Mock = Mock
Vue.prototype.$Qs = Qs
// Object.keys(custom).forEach(key => { Vue.filter(key, custom[key])})
Vue.prototype.$dateFunction = custom;
// axios.defaults.baseURL = "http://localhost:8181";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
