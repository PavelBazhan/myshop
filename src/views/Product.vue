<template>
  <section id="product">
    <div class="current_product">
      <div class="images_wrap">
        <div class="images_inner">
          <div class="image">
            <img :src="`/images/shop/${$route.params.id}_${choosenColor}_1.jpg`" alt="">
          </div>
          <div class="image">
            <img :src="`/images/shop/${$route.params.id}_${choosenColor}_0.jpg`" alt="">
          </div>
        </div>
      </div>
      <div class="description_wrap">
        <div class="description">
          <p class="collection_name" v-if="product.collection != ''">{{ product.collection }}</p>
          <p class="title">{{ product.name }}</p>
          <p class="price">USD <strong>${{ product.priceDollar }}</strong></p>
          <p class="color">COLOR: <span>{{choosenColor}}</span></p>
          <div class="color_panel">
            <label v-for="color of product.colors" :key="color">
              <input type="radio" name="choosen_color" :value="color" v-model="choosenColor">
              <div class="color_block" :class="{ active: (color == choosenColor) }" :style="{ background: generalColors[color] }"></div>
            </label>
          </div>

          <p class="size">SIZE</p>
          <div class="size_panel">
            <label v-for="size in product.sizes" :key="size">
              <input type="radio" name="choosen_size" :value="size" v-model="choosenSize">
              <div class="size_block" :class="{ active: (size == choosenSize)}">{{ size }}</div>
            </label>
          </div>

          <button class="add_to_bag" @click="addToBag">ADD TO BAG</button>
          <button class="back" @click="backToShop">BACK TO SHOP</button>

          <ul class="extra_info">
            <li :class="{ desc_opened: prodDescriptionOpened }">
              <p class="title" @click="switchExtra('prodDescription')">PRODUCT DESCRIPTION</p>
              <p class="info">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. </p>
            </li>
            <li :class="{ desc_opened: shippingOpened }">
              <p class="title" @click="switchExtra('shipping')">SHIPPING & RETURNS</p>
              <p class="info">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. </p>
            </li>
            <li :class="{ desc_opened: fabricOpened }">
              <p class="title" @click="switchExtra('fabric')">FABRIC COMPOSITION</p>
              <p class="info">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="more_products">
      <div class="block">
        <div class="text">
          <p>VINTAGE INSPIRED</p>
          <p>more things from this collection</p>
        </div>
      </div>
      <div class="block">
        <router-link tag="a" to="/catalog/coats/11933">
          <img src="/images/shop/11933_stone_0.jpg" alt="">
        </router-link>
      </div>
      <div class="block">
        <router-link tag="a" to="/catalog/dresses/12001">
          <img src="/images/shop/12001_black_0.jpg" alt="">
        </router-link>
      </div>
    </div>
    <div class="popup" :class="{ showed: popupShowed }">
      ITEM ADDED TO BAG
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      prodDescriptionOpened: false,
      shippingOpened: false,
      fabricOpened: false,
      choosenColor: null,
      choosenSize: null,
      prevRoute: null,

      popupShowed: false
    }
  },
  methods: {
    switchPopup () {
      this.popupShowed = true
      setTimeout(() => {
        this.popupShowed = false
      }, 1000)
    },
    backToShop () {
      this.$router.go(-1)
    },
    switchExtra (type) {
      switch(type) {
        case 'prodDescription':
          this.prodDescriptionOpened = !this.prodDescriptionOpened
          break
        case 'shipping':
          this.shippingOpened = !this.shippingOpened
          break
        case 'fabric':
          this.fabricOpened = !this.fabricOpened
          break
      }
    },
    addToBag () {
      let itemParams = {
        id: this.$route.params.id,
        color: this.choosenColor,
        size: this.choosenSize
      }
      this.$store.commit('addToBag', itemParams)
      this.switchPopup()
    }
  },
  components: {

  },
  computed: {
    product () {
      let id = this.$route.params.id
      let goods = this.$store.state.shop.goods
      for (let i = 0; i < goods.length; i++) {
        if (goods[i].id == id) {
          return goods[i]
        }
      }
      return null
    },
    generalColors () {
      return this.$store.state.shop.colors
    }
  },
  mounted () {
    this.choosenColor = this.product.colors[0]
  },
  watch: {
    '$route': {
      handler: function() {
        this.choosenColor = this.product.colors[0]
        this.choosenSize = this.product.sizes[0]
      },
      deep: true,
      immediate: true
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  }
}
</script>

<style scoped>
#product {
  width: 100%;
  padding-top: 5vw;
}

.current_product {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 4em;
}

.images_wrap {
  width: 75%;
}

.images_inner {
  display: flex;
  flex-flow: row nowrap;
}

.images_inner .image {
  /* width: 50%; */
}

.images_inner .image:last-child {
  border-left: 1px solid rgba(0, 0, 0, 0.3);
}

.images_inner .image img {
  width: 100%;
}

.description_wrap {
  width: 25%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-size: 0.9vw;
  line-height: 1em;
  padding-top: 4em;
}

.description {
  width: 70%;
}

.description p.collection_name {
  font-weight: bold;
  font-size: 1.2em;
}

.description > p.title {
  margin-bottom: 2em;
}

.description p.price {
  margin-bottom: 2em;
}

.description p.color {
  color: #8C8C8C;
}

.description p.size {
  color: #8C8C8C;
}

.color_panel {
  margin-bottom: 2em;
}

.color_panel .color_block {
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
}

.color_panel .color_block.active {
  /* outline: 2px solid rgba(0, 204, 255, 0.3); */
  outline: 2px solid black;
}

.color_panel .color_block:hover {
  cursor: pointer;
}

.color_panel label input[type=radio] {
  display: none;
}

.color_panel label input[checked] + div {
  width: 3em;
}

.size_panel {
  margin-bottom: 2em;
}

.size_panel .size_block {
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
  background: #f0f0f0;
  text-align: center;
  line-height: 2em;
  cursor: pointer;
  text-transform: uppercase;
}

.size_panel label input[type=radio] {
  display: none;
}

.size_panel .size_block.active {
  border-bottom: 2px solid black;
}

button.add_to_bag {
  width: 100%;
  height: 3em;
  background: black;
  color: white;
  border: none;
  margin-bottom: 1em;
}

button.back {
  width: 100%;
  height: 3em;
  background: white;
  color: #888;
  border: 2px solid #bbb;
  margin-bottom: 1em;
  display: none;
}

.description ul.extra_info {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.description ul.extra_info li {
  overflow: hidden;
}

.description ul.extra_info p {
  margin: 0;
}

.description ul.extra_info p.title {
  padding: 1em 0;
  cursor: pointer;
}

.description ul.extra_info p.title:before {
  display: inline-block;
  content: "+";
  width: 1.25em;
}

.description ul.extra_info p.info {
  padding-left: 1.25em;
  line-height: 1.25em;
  color: #8C8C8C;
  height: 0;
}

.description ul.extra_info li.desc_opened p.title:before {
  content: "-"
}

.description ul.extra_info li.desc_opened > p.info {
  height: auto;
}

.more_products {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin-bottom: 4em;
  font-size: 1vw;
}

.more_products .block:first-child {
  width: 32%;
}

.more_products .block {
  width: 34%;
}

.more_products .block:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
}

.more_products .block:last-child {
  border-left: 1px solid rgba(0, 0, 0, 0.3);
}

.more_products .block .text p {
  text-align: center;
}

.more_products .block .text p:first-child {
  font-weight: bold;
  font-size: 3em;
}

.more_products .block .text p:last-child {
  font-size: 1.5em;
}

.more_products .block img {
  width: 100%;
}

.popup {
  display: none;
}

@media screen and (max-width: 600px) {
  #product {
    padding-top: 15vw;
    font-size: 5vw;
  }

  .current_product {
    flex-direction: column;
  }

  .images_wrap {
    width: 100%;
  }

  .images_wrap .image:last-child {
    border: none;
  }

  .images_wrap .image:first-child {
    display: none;
  }

  .description_wrap {
    width: 100%;
    font-size: 4vw;
  }

  .description {
    width: 80%;
  }

  .color_panel .color_block {
    width: 3em;
    height: 3em;
  }

  .size_panel .size_block {
    width: 3em;
    height: 3em;
    line-height: 3em;
  }

  button.add_to_bag {
    height: 4em;
  }

  button.back {
    height: 4em;
    display: block;
  }

  .more_products {
    flex-direction: column;
    font-size: 2vw;
  }

  .more_products .block {
    width: 100%;
  }

  .more_products .block:first-child {
    width: 100%;
  }

  .more_products .block:last-child {
    border-left: none;
  }

  .popup {
    display: block;
    position: fixed;
    width: 40vw;
    top: 5vw;
    right: -45vw;
    padding: 3vw;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 1em;
    text-align: center;
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.125, 0.715, 0.175, 0.845), opacity 0.5s cubic-bezier(0.125, 0.715, 0.175, 0.845);
  }

  .popup.showed {
    transform: translateX(-50vw);
    opacity: 1;
  }
}
</style>
