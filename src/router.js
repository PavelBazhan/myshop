import Vue from 'vue'
import Router from 'vue-router'

import Collections from './views/Collections.vue'
import Shop from './views/Shop.vue'
import NewCollection from './views/NewCollection.vue'
import Bag from './views/Bag.vue'
import SignIn from './views/SignIn.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'collections',
      component: Collections,
      alias: '/#'
    },
    {
      path: '/catalog',
      name: 'shop',
      component: Shop
    },
    {
      path: '/catalog/:category',
      name: 'shopCateg',
      component: Shop
    },
    {
      path: '/new_collection',
      name: 'newCollection',
      component: NewCollection
    },
    {
      path: '/buy_cart',
      name: 'bag',
      component: Bag
    },
    {
      path: '/registration',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
