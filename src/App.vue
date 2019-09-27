<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view></router-view>
    <app-footer></app-footer>
    <app-bag></app-bag>
  </div>
</template>

<script>
  import appNavigation from './components/Navigation.vue'
  import appFooter from './components/Footer.vue'
  import appBag from './components/Bag.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      appNavigation,
      appFooter,
      appBag
    }
  }
</script>

<style>
body {
  overflow-x: hidden;
  font-family: 'Muli', sans-serif;
}

a {
  text-decoration: none;
}

a:hover {
  color: white;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
