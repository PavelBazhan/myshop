import Vue from 'vue'
import Vuex from 'vuex'
import collections from './collections.js'
import footer from './footer.js'
import shop from './shop.js'
import product from './product.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collections,
    footer,
    shop
  },
  state: {
    title: "MYSHOP"
  },
  mutations: {

  },
  actions: {

  }

})
