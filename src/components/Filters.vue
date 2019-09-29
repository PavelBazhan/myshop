<template>
  <aside id="filters">
    <div class="refine" :class="{refOpened: refineOpened, refClosed: !refineOpened}" @click="switchRefine">
      <span>REFINE ITEMS</span>
    </div>

    <div class="filter_wrap">
      <div class="title" :class="{fOpened: categoriesOpened, fClosed: !categoriesOpened}" @click="switchFilter('category')">
        <span>CATEGORIES</span>
      </div>
      <ul class="categ_list">
        <li>
          <router-link
            tag="a"
            :to="{ name: $route.name, params: $route.params, query: newCollectionUrl }"
            :style="{ textDecoration: $route.query.nc !== undefined ? 'underline' : 'none' }"
            exact
          >
            <span>new collection</span>
          </router-link>
        </li>

        <li v-for="category in categoriesList" :key="category">
          <router-link
            tag="a"
            :to="{ name: 'shopCateg', params: {category: category}, query: $route.query }"
            active-class="category_active"
            exact
          >
            <span>{{ category.replace(/_/g, " " ) }}</span>
          </router-link>
        </li>

        <li>
          <router-link
            tag="a"
            :to="{name: 'shop', query: $route.query }"
            active-class="category_active"
            exact
          >
            <span>shop all</span>
          </router-link>
        </li>
      </ul>

      <div class="title" :class="{fOpened: filterOpened, fClosed: !filterOpened}" @click="switchFilter('filter')">
        <span>FILTER</span>
      </div>
      <ul class="filter_list">
        <li>
          <span>Size</span>
          <ul class="check_wrap">

            <li class="check" v-for="size in sizesList" :key="size">
              <label>
                <input checked type="checkbox" name="size" :value="size" v-model="sizeChecked">
                <span>{{ size }}</span>
              </label>
            </li>

          </ul>
        </li>

        <li>
          <span>Price</span>
          <div class="range">
            <div class="range_block">
              <span>from</span>
              <input type="range" step="5" :min="priceFrom" :max="priceTo" v-model.number="currentPriceFrom">
              <input type="text" maxlength="4" v-model.number.lazy="currentPriceFrom">
            </div>
            <div class="range_block">
              <span>to</span>
              <input type="range" step="5" :min="priceFrom" :max="priceTo" v-model.number="currentPriceTo">
              <input type="text" maxlength="4" v-model.number.lazy="currentPriceTo">
            </div>
          </div>
        </li>

      </ul>

      <div class="title" :class="{fOpened: sortOpened, fClosed: !sortOpened}" @click="switchFilter('sort')">
        <span>SORT</span>
      </div>
      <ul class="sort_list">
        <li v-for="sortT in sortList" :key="sortT.value">
          <span
            :name="sortT.value"
            :class="{ active: sortType == sortT.value }"
            @click="changeSortType(sortT.value)"
          >
            {{ sortT.name }}
          </span>
        </li>


      </ul>
    </div>



  </aside>
</template>

<script>

export default {
  data () {
    return {
      categoriesOpened: false,
      filterOpened: false,
      refineOpened: false,
      sortOpened: false
    }
  },
  computed: {
    categoriesList () {
      return this.$store.state.shop.categories
    },
    sizesList () {
      return this.$store.state.shop.filters.size
    },
    priceFrom () {
      return this.$store.getters.priceFrom
    },
    priceTo () {
      return this.$store.getters.priceTo
    },
    newCollectionUrl () {
      let newUrl = {}
      for (let key in this.$route.query) {
        newUrl[key] = this.$route.query[key]
      }
      if (this.$route.query.nc === undefined) {
        newUrl.nc = null
      } else {
        delete newUrl.nc
      }
      return newUrl
    },
    sortList () {
      return this.$store.state.shop.sorts
    },

    sizeChecked: {
      get () {
        return this.$store.state.shop.sizeChecked
      },
      set (value) {
        this.$store.commit('updateSizeChecked', value)
      }
    },
    newCollectionShowed: {
      get () {
        return this.$store.state.shop.newCollectionShowed
      },
      set (value) {
        this.$store.commit('updateNewCollectionShowed', value)
      }
    },
    currentPriceFrom: {
      get () {
        return this.$store.state.shop.currentPriceFrom
      },
      set (value) {
        this.$store.commit('updateCurrentPriceFrom', value)
      },
    },
    currentPriceTo: {
      get () {
        return this.$store.state.shop.currentPriceTo
      },
      set (value) {
        this.$store.commit('updateCurrentPriceTo', value)
      }
    },
    sortType: {
      get () {
        return this.$store.state.shop.sortType
      },
      set (value) {
        this.$store.commit('updateSortType', value)
      }
    }
  },
  methods: {
    switchRefine () {
      this.refineOpened = !this.refineOpened
    },
    switchFilter(filter) {
      if (filter == 'filter') {
        this.filterOpened = !this.filterOpened
      }
      if (filter == 'sort') {
        this.sortOpened = !this.sortOpened
      }
      if (filter == 'category') {
        this.categoriesOpened = !this.categoriesOpened
      }
    },
    updateRoute () {
      let newUrl = {}
      for (let key in this.$route.query) {
        newUrl[key] = this.$route.query[key]
      }

      if (this.sizeChecked.length > 0) {
        newUrl.size = this.sizeChecked.join(',')
      } else {
        delete newUrl.size
      }

      if ((this.currentPriceFrom > this.priceFrom) || (this.currentPriceTo < this.priceTo)) {
        newUrl.priceRange = this.currentPriceFrom + ',' + this.currentPriceTo
      } else {
        delete newUrl.priceRange
      }

      if (this.sortType != 'pop') {
        newUrl.sort = this.sortType
      } else {
        delete newUrl.sort
      }

      this.$router.push({
        name: this.$route.name,
        params: this.$route.params,
        query: newUrl }).catch(err => {})
    },
    changeSortType (stype) {
      this.sortType = stype
    }
  },
  watch: {
    '$route': {
      handler: function() {
        if (this.$route.query.size) {
          this.sizeChecked = this.$route.query.size.split(',');
        }
        if (this.$route.query.nc !== undefined) {
          this.newCollectionShowed = true
        } else {
          this.newCollectionShowed = false
        }
        if (this.$route.query.priceRange) {
          // priceRange !!!
        }
        if (this.$route.query.sort) {
          this.sortType = this.$route.query.sort
        }
      },
      deep: true,
      immediate: true
    },
    sizeChecked () {
      this.updateRoute()
    },
    currentPriceFrom () {
      if (this.currentPriceFrom > this.currentPriceTo) {
        this.currentPriceTo = this.currentPriceFrom
      }
      this.updateRoute()
    },
    currentPriceTo () {
      if (this.currentPriceTo < this.currentPriceFrom) {
        this.currentPriceFrom = this.currentPriceTo
      }
      this.updateRoute()
    },
    sortType () {
      this.updateRoute()
    }
  },
  mounted () {
    this.currentPriceFrom = this.priceFrom
    this.currentPriceTo = this.priceTo
  }
}
</script>

<style scoped>
  #filters {
    width: 28%;
  }

  #filters .refine {
    display:none;
  }

  ul {
    margin-bottom: 1em;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    list-style-type: none;
  }

  .title {
    height: 3em;
    line-height: 3em;
    font-weight: bold;
  }

  .categ_list {

  }

  .categ_list a {
    color: black;
    text-transform: uppercase;
  }

  .categ_list a.category_active {
    color: black;
    text-decoration: underline;
  }

  .categ_list a:hover {
    color: black;
  }

  .filter_list .check_wrap {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .filter_list .check_wrap .check {
    margin-right: 0.5em;
  }

  .filter_list .check_wrap input[type=checkbox] {
    display: none;
  }

  .filter_list .check_wrap .check span {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 1.5em;
    position: relative;
    height: 2em;
    text-transform: uppercase;
  }

  .filter_list .check_wrap .check span:hover {
    cursor: pointer;
  }

  .filter_list .check_wrap .check span:before {
    content: "";
    display: block;
    position: absolute;
    width: 1.2em;
    height: 1.2em;
    background: transparent;
    border: 4px solid white;
    top: 1.4em;
  }

  .filter_list .check_wrap .check span:after {
    content: "";
    display: block;
    position: absolute;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid black;
    top: 1.4em;
  }

  .filter_list .check_wrap .check input:checked + span:before {
    background: black;
  }

  .range_block {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .range_block span {
    width: 2em;
    height: 2em;
    line-height: 2em;
    margin-right: 1em;

  }

  .range_block input[type=range] {
    min-width: 3em;
    /* width: 10em; */
    margin-right: 1em;
  }

  .range_block input[type=text] {
    max-width: 3.5em;
    font-size: 1.5em;
    text-align: center;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #eee;
    outline: none;
  }

  .sort_list span {
    color: black;
  }

  .sort_list span:hover {
    color: black;
    cursor: pointer;
  }

  .sort_list span.active {
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    #filters {
      width: 100%;
      margin-bottom: 1em;
    }

    #filters .refine {
      height: 15vw;
      line-height: 15vw;
      display: block;
      border-bottom: 1px dashed #D8D8D8;
    }

    #filters .refine.refClosed span:before {
      content: "+ ";
      display: inline-block;
      width: 1em;
    }

    #filters .refine.refOpened span:before {
      content: "- ";
      display: inline-block;
      width: 1em;
    }

    .refine.refClosed + .filter_wrap {
      height: 0;
      overflow: hidden;
    }

    .refine.refOpened + .filter_wrap {
      height: auto;
      overflow: hidden;
    }

    .filter_wrap {
      transition: height 0.5s ease;

      font-size: 0.8em;
    }

    .filter_wrap > ul {
      border-bottom: 1px dashed #D8D8D8;
      margin-bottom: 0;
      padding-bottom: 1em;
    }

    .title {
      font-weight: normal;
    }

    .title.fClosed span:before {
      content: "+ ";
      display: inline-block;
      width: 1em;
    }

    .title.fOpened span:before {
      content: "- ";
      display: inline-block;
      width: 1em;
    }

    .title.fClosed + .categ_list {
      height: 0;
      overflow: hidden;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .title.fOpened + .categ_list {
      height: auto;
      overflow: hidden;
    }

    .categ_list {
      display: flex;
      flex-flow: row wrap;
      padding-left: 1em;
    }

    .categ_list li {
      display: block;
      height: 2em;
      margin-right: 2em;
    }

    .title.fClosed + .filter_list {
      height: 0;
      overflow: hidden;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .title.fOpened + .filter_list {
      height: auto;
      overflow: hidden;
    }

    .filter_list {
      padding-left: 1em;
    }

    .filter_list .check_wrap {
      display: flex;
      justify-content: center;
    }

    .filter_list .check_wrap .check span {
      font-size: 1em;
      width: 2em;
      position: relative;
      height: 2em;
      text-transform: uppercase;
    }

    .filter_list .check_wrap .check span:hover {
      cursor: pointer;
    }

    .filter_list .check_wrap .check span:before {
      content: "";
      display: block;
      position: absolute;
      width: 1.4em;
      height: 1.4em;
      background: transparent;
      border: 4px solid white;
      top: 1.4em;
    }

    .filter_list .check_wrap .check span:after {
      content: "";
      display: block;
      position: absolute;
      width: 1.4em;
      height: 1.4em;
      border: 2px solid black;
      top: 1.4em;
    }

    .range_block {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
    }

    .filter_list .check_wrap .check span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-box-align: start;
    }

    .sort_list {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    .title.fClosed + .sort_list {
      height: 0;
      overflow: hidden;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .title.fOpened + .sort_list {
      height: auto;
      overflow: hidden;
    }



  }
</style>
