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

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$Mock = Mock

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
