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
import axios from 'axios'
import Mock from 'mockjs'
import  * as custom from '../util/js/dateFilter'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$Mock = Mock
// Object.keys(custom).forEach(key => { Vue.filter(key, custom[key])})
Vue.prototype.$dateFunction = custom;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
