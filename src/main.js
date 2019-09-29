import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store/index.js'
import Vuelidate from 'vuelidate'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
