import Vue from 'vue'
import Vuex from 'vuex'
import collections from './collections.js'
import footer from './footer.js'
import shop from './shop.js'
import bag from './bag.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collections,
    footer,
    shop,
    bag
  },
  state: {
    title: "MYSHOP"
  },
  mutations: {

  },
  actions: {

  }

})
