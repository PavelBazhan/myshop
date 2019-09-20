import Vue from 'vue'
import Vuex from 'vuex'
import collections from './collections.js'
import footer from './footer.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collections,
    footer
  },
  state: {
    title: "MYSHOP"
  },
  mutations: {

  },
  actions: {

  }

})
