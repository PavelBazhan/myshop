<template>
  <div id="new_collection">
    <h1>Hello!</h1>
    <h2 @click="showMeRoute">New Collection is Here!</h2>
  </div>
</template>

<script>
// import Router from 'vue-router'

export default {
  methods: {
    showMeRoute () {
      console.log(this.$router.currentRoute.path)
    }
  }
}
</script>

<style scoped>
  #new_collection {
    padding-top: 3.9vw;
  }

  @media screen and (max-width: 600px) {
    #new_collection {
      padding-top: 15vw;
    }
  }
</style>
