<template>
  <section id="shop">
    <div class="shop_wrap">
      <app-filters></app-filters>
      <div class="goods_wrap">

        <div class="location">
          <router-link tag="a" to="/catalog">
            <span @click="$store.dispatch('clearFilter')">Catalog</span>
          </router-link>
          <span v-if="$route.params.category">></span>
          <router-link
            tag="a"
            :to="{ name: $route.name, params: $route.params }"
            style="text-transform: capitalize"
            v-if="$route.params.category"
          >
            <span @click="$store.dispatch('clearFilter')">
              {{ this.$route.params.category.replace(/_/g, " " ) }}
            </span>
          </router-link>
        </div>

        <div class="goods" v-if="filteredGoods.length > 0">
          <div class="item" v-for="item in filteredGoods" :key="item.id">
            <router-link tag="a" :to="`/catalog/${item.category.toLowerCase()}/${item.id}`">
              <img :src="`/images/shop/${ item.imagesByColor[0][0] }`" alt="">
            </router-link>

            <div class="item_info">
              <span class="collection" v-if="item.collection">{{ item.collection }}</span>
              <span class="name">
                <router-link tag="a" to="/catalog/coats/11534">
                  {{ item.name }}
                </router-link>
              </span>
              <span class="price">$ {{ item.priceDollar }}</span>
            </div>
          </div>
        </div>

        <div class="nothing" v-else>
          Nothing found for this request.
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Filters from '../components/Filters.vue'

export default {
  components: {
    appFilters: Filters
  },
  computed: {
    shopGoods () {
      return this.$store.state.shop.goods
    },
    sizeChecked () {
      return this.$store.state.shop.sizeChecked
    },
    filteredGoods () {

      let output = this.shopGoods.filter((item) => {
        if (!this.$route.params.category) {
          return true
        }
        return item.category == this.$route.params.category
      })

      output = output.filter((item) => {
        let tempArray = this.sizeChecked.length > 0 ? this.sizeChecked : ['xs', 's', 'm', 'l', 'xl']
        for (let i = 0; i < tempArray.length; i++) {
          if (item.sizes.indexOf(tempArray[i]) !== -1) {
            return true
          }
        }
        return false
      })

      output = output.filter((item) => {
        if (!this.$store.state.shop.newCollectionShowed) {
          return true
        }
        if (item.collection === this.$store.state.shop.newCollection) {
          return true
        }
        return false
      })

      output = output.filter((item) => {
        let min = this.$store.state.shop.currentPriceFrom
        let max = this.$store.state.shop.currentPriceTo
        if ((typeof  min == 'number') &&(typeof  max == 'number')) {
          if ((item.priceDollar >= min) && (item.priceDollar <= max)) {
            return true
          }
        } else {
          return true
        }
      })

      switch (this.$store.state.shop.sortType) {
        case 'prlowtohigh':
          output.sort((itemA, itemB) => {
            return itemA.priceDollar - itemB.priceDollar
          })
          break;
        case 'prhightolow':
          output.sort((itemA, itemB) => {
            return itemB.priceDollar - itemA.priceDollar
          })
          break;
      }

      return output
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('clearFilter')
    next()
  }
}
</script>

<style scoped>
#shop {
  width: 100%;
  padding-top: 5vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.shop_wrap {
  width: 90vw;
  display: flex;
  flex-flow: row nowrap;
}

.shop_wrap .goods_wrap {
  width: 100%;
}

.shop_wrap .goods_wrap .location {
  width: 100%;
  height: 3em;
  line-height: 3em;
  font-weight: bold;
}

.shop_wrap .goods_wrap .location a {
  width: 100%;
  height: 3em;
  line-height: 3em;
  color: black;
  font-weight: bold;
}

.shop_wrap .goods_wrap .location span {
  margin-right: 1em;
}

.shop_wrap .goods_wrap .location a:last-child {
  font-weight: 400;
}

.shop_wrap .goods {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.shop_wrap .goods .item {
  width: 46%;
  margin-bottom: 3em;

}

.shop_wrap .goods .item img {
  width: 100%;
}

.shop_wrap .goods .item .item_info {
  display: flex;
  flex-flow: column nowrap;
  padding: 1em 0;
  align-items: center;
}

.shop_wrap .goods .item .item_info .collection {
  font-weight: bold;
}

.shop_wrap .goods .item .item_info .name {
  font-size: 0.8em;
}

.shop_wrap .goods .item .item_info .name a {
  color: black;
}

.shop_wrap .goods .item .item_info .name a:hover {
  color: black;
  text-decoration: none;
}

.shop_wrap .goods .item .item_info .price {
  font-weight: bold;
}

.shop_wrap .nothing {
  width: 100%;
  font-size: 2em;
  line-height: 6em;
  height: 6em;
  text-align: center;
}

@media screen and (min-width: 601px) {

}

@media screen and (max-width: 600px) {
  #shop {
    padding-top: 15vw;
  }

  .shop_wrap {
    flex-flow: column nowrap;
    width: 95vw;
  }

  .shop_wrap .location {
    display: none;
  }

  .shop_wrap .goods .item {
    width: 48.7%;
    margin-bottom: 1em;
  }

  .shop_wrap .goods .item .item_info {
    padding: 0.3em 0;
    align-items: flex-start;
    text-transform: uppercase;
  }

  .shop_wrap .goods .item .item_info .collection {
    display: none;
  }

  .shop_wrap .nothing {
    width: 100%;
    font-size: 1.5em;
    line-height: 1em;
    height: 1em;
    text-align: center;
  }

}
</style>
