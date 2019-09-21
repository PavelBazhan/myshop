<template>
  <section id="shop">
    <div class="shop_wrap">
      <app-filters></app-filters>
      <div class="goods_wrap">
        <div class="location">
          <span>Catalog</span>
          <span>></span>
          <span>Something</span>
        </div>
        <div class="goods">

          <div class="item" v-for="item in shop_goods">
            <router-link tag="a" :to="`/catalog/${item.category.toLowerCase()}/${item.id}`">
              <img :src="`./images/shop/${ item.imagesByColor[0][0] }`" alt="">
            </router-link>

            <div class="item_info">
              <span class="collection" v-if="item.collection">{{ item.collection }}</span>
              <span class="name">
                <router-link tag="a" to="/catalog/coats/11534">
                  {{ item.name }}
                </router-link>
              </span>
              <span class="price" @click="qwer">$ {{ item.priceDollar }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Filters from '../components/Filters.vue'

export default {
  methods: {
    qwer () {
      console.log(this.$store.state.shop.goods[0].imagesByColor['pink'])
    }
  },
  components: {
    appFilters: Filters
  },
  computed: {
    shop_goods () {
      return this.$store.state.shop.goods
    }
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

.shop_wrap .goods_wrap .location span {
  width: 100%;
  height: 3em;
  line-height: 3em;
  margin-right: 1em;
}

.shop_wrap .goods_wrap .location span:last-child {
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

@media screen and (min-width: 601px) {

}

@media screen and (max-width: 600px) {
  #shop {
    padding-top: 20vw;
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

}
</style>
