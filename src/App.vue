<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appNavigation from './components/Navigation.vue'
  import appFooter from './components/Footer.vue'

  export default {
    data () {
      return {

      }
    },
    components: {
      appNavigation,
      appFooter
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
</style>
