import Vue from 'vue'
import Router from 'vue-router'

import Collections from './views/Collections.vue'
import Shop from './views/Shop.vue'
import FullBag from './views/FullBag.vue'
import SignIn from './views/SignIn.vue'
import Product from './views/Product.vue'

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
      path: '/catalog/:category/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/buy_cart',
      name: 'bag',
      component: FullBag
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
  ],
  scrollBehavior (to, from) {
    if (from.name == 'collections') {
      return {
        y: 0
      }
    }

    if (to.name == 'product') {
      return {
        y: 0
      }
    }
  }
})
