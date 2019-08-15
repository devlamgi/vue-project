import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
