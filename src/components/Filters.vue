<template>
  <div id="filters">
    <div class="title">
      <span>CATEGORIES</span>
    </div>
    <ul class="categ_list">
      <li v-for="(category, ind) in categories_list">
        <span>{{ category }}</span>
      </li>
    </ul>

    <div class="title">
      <span>FILTER</span>
    </div>
    <ul class="filter_list">

    </ul>

    <div class="title">
      <span>SORT</span>
    </div>
    <ul class="sort_list">

    </ul>

  </div>
</template>

<script>

export default {
  computed: {
    categories_list () {
      return this.$store.state.shop.categories
    }
  }
}
</script>

<style scoped>
  #filters {
    width: 28%;

    background: #eee;
  }

  .title {
    height: 3em;
    line-height: 3em;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    #filters {
      width: 100%;
    }
  }
</style>
