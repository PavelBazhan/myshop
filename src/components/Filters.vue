<template>
  <aside id="filters">
    <div class="title">
      <span @click="qwer">CATEGORIES</span>
    </div>
    <ul class="categ_list">
      <li>
        <router-link
          tag="a"
          :to="{ name: $route.name, params: $route.params, query: newCollectionUrl }"
          active-class="category_active"
          exact
        >
          <span>new</span>
        </router-link>
      </li>
      <li v-for="(category, ind) in categoriesList">
        <!-- <router-link tag="a" :to="getEqualUrl(category)" active-class="category_active" exact> -->
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

    <div class="title">
      <span>FILTER</span>
    </div>
    <ul class="filter_list">
      <li>
        <span>Size</span>
        <ul class="check_wrap">

          <li class="check" v-for="size in sizesList">
            <label>
              <input checked type="checkbox" name="size" :value="size" v-model="sizeChecked">
              <span>{{ size }}</span>
            </label>
          </li>

        </ul>
      </li>

      <li>
        <span>Price</span>
        <input type="range" min="0" max="100">
      </li>

    </ul>

    <div class="title">
      <span>SORT</span>
    </div>
    <ul class="sort_list">

    </ul>

  </aside>
</template>

<script>

export default {
  data () {
    return {
      // sizeChecked: []
    }
  },
  computed: {
    nextUrl () {
      console.log(this.sizeChecked)
      return 'asd'
    },

    categoriesList () {
      return this.$store.state.shop.categories
    },
    sizesList () {
      return this.$store.state.shop.filters.size
    },
    newCollectionUrl () {
      let newUrl = {}
      if (this.$route.query.nc === undefined) {
        for (let key in this.$route.query) {
          newUrl[key] = this.$route.query[key]
        }
        newUrl.nc = null
      } else {
        delete newUrl.nc
      }
      return newUrl
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
    }
  },
  methods: {
    qwer () {
      console.log(this.$route.query)
      console.log(this.$route.query.nc)
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
      console.log(newUrl)

      this.$router.push({
        name: this.$route.name,
        params: this.$route.params,
        query: newUrl }).catch(err => {})
    }
  },
  watch: {
    '$route': {
      handler: function(search) {
        if (this.$route.query.size) {
          this.sizeChecked = this.$route.query.size.split(',');
        }
        if (this.$route.query.nc !== undefined) {
          this.newCollectionShowed = false;
        }
        console.log('tru')
      },
      deep: true,
      immediate: true
    },
    sizeChecked () {
      this.updateRoute()
    }
  }
}
</script>

<style scoped>
  #filters {
    width: 28%;
  }

  #filters ul {
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
    /* text-align: center; */
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

  @media screen and (max-width: 600px) {
    #filters {
      width: 100%;
    }
  }
</style>
