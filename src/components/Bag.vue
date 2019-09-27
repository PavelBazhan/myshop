<template>
  <section id="bag" :class="{ active: bagIsActive }">
    <div class="bag_background" @click="switchBag"></div>
    <div class="bag_wrap">

      <div class="header">
        <div>
          <span>BAG </span><span v-if="bagItems.length">({{ totalQuantity }})</span>
        </div>
        <button class="close_button" @click="switchBag"></button>
      </div>

      <p class="total">TOTAL: USD ${{ totalPrice }}</p>

      <router-link tag="button" :to="{name: 'bag'}" class="bag_btn white">
        VIEW BAG
      </router-link>
      <button class="bag_btn black">CHECKOUT</button>

      <div class="items">

        <div class="item" v-for="product in bagItems">
          <img
            :src="`/images/shop/${product.id}_${product.color}_0.jpg`"
            alt="">
          <button
            class="remove_button"
            :name="[product.id, product.color, product.size].join('_')"
            @click="remove_item">
          REMOVE</button>
          <div class="info">
            <p>{{ getProductById(product.id).name }}</p>
            <p>quantity: {{ product.quantity }}</p>
            <p>size: {{ product.size }}</p>
            <p>color: {{ product.color }}</p>
            <p>
              <span>usd ${{ product.quantity*getProductById(product.id).priceDollar }} </span>
              <span
                v-if="product.quantity > 1"
              >(${{ getProductById(product.id).priceDollar }} per each)</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    qwer () {
      console.log('click')
    },
    switchBag () {
      this.bagIsActive = !this.bagIsActive
      console.log(this.bagIsActive)
    },
    getProductById (id) {
      let goods = this.$store.state.shop.goods
      for (let i = 0; i < goods.length; i++) {
        if (goods[i].id == id) {
          return goods[i]
        }
      }
    },
    remove_item (e) {

      let params = e.srcElement.name.split('_')
      let delId = null
      let items = this.bagItems
      for (let i = 0; i < items.length; i++) {
        if (
          (items[i].id == params[0]) &&
          (items[i].color == params[1]) &&
          (items[i].size == params[2])
        ) {
          delId = i
        }
      }
      this.bagItems.splice(delId, 1)
      console.log(this.bagItems)
    }
  },
  computed: {
    bagIsActive: {
      get () {
        return this.$store.state.bag.bagIsActive
      },
      set (value) {
        this.$store.commit('switchBagIsActive', value)
      }
    },
    bagItems () {
      return this.$store.state.bag.bagItems
    },
    totalPrice () {
      let items = this.bagItems
      let sum = 0
      for (let i = 0; i < items.length; i++) {
        sum += items[i].quantity * this.getProductById(items[i].id).priceDollar
      }
      return sum
    },
    totalQuantity () {
      let items = this.bagItems
      let sum = 0
      for (let i = 0; i < items.length; i++) {
        sum += items[i].quantity
      }
      return sum
    }
  }
}
</script>

<style scoped>
#bag {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 5;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;
}

#bag.active {
  visibility: visible;
  opacity: 1;
}

.bag_background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
}

#bag.active .bag_wrap {
  transform: translateX(-24vw)
}

.bag_wrap {
  position: absolute;
  width: 24vw;
  height: 100%;
  top: 0;
  right: -24vw;
  padding: 0.8vw;
  background: white;
  font-size: 0.8vw;
  transition: transform 0.3s ease;
  display: flex;
  flex-flow: column nowrap;

  overflow: auto;
}

.bag_wrap .header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 2em;
  line-height: 2em;
  margin-bottom: 1em;
}

.bag_wrap .header .close_button {
  height: 2em;
  width: 2em;
  border: none;
  background: none;
  background-image: url('../icons/cancel.svg');
  background-size: cover;
}

.bag_wrap .header .close_button:focus {
  outline: none;
}

.bag_wrap .total {
  font-size: 1.2em;
  margin-bottom: 1.4em;
}

.bag_wrap .bag_btn {
  width: 100%;
  min-height: 2.4em;
  font-size: 1.2em;
  margin-bottom: 0.8vw;
}

.bag_wrap .bag_btn.white {
  border: 1px solid black;
  background: white;
}

.bag_wrap .bag_btn.black {
  border: none;
  background: black;
  color: white;
}

.bag_wrap .items {
  width: 100%;
}

.bag_wrap .items .item {
  position: relative;
  width: 100%;
  margin-bottom: 0.8vw;
}

.bag_wrap .items .item img {
  width: 100%;
  min-height: 15vw;
}

.bag_wrap .items .item .remove_button {
  position: absolute;
  top: 0;
  right: 0;
  width: 6em;
  height: 3em;
  background: none;
  border: none;
}

.bag_wrap .items .item .remove_button:focus {
  outline: none;
}

.bag_wrap .items .item .info {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 1vw;
  color: white;
  background: rgba(0, 0, 0, 0.8)
}

.bag_wrap .items .item .info p {
  margin: 0;
  text-transform: uppercase;
}

</style>
