<template>
  <section id="bag_full">

    <div class="bag_wrap">

      <div class="header_block">
        BAG <span>{{ totalQuantity }} items</span>
      </div>

      <div class="items_block">

        <div v-for="product in bagItems" class="item">
          <div class="item_photo">
            <img :src="`/images/shop/${product.id}_${product.color}_0.jpg`" alt="">
          </div>
          <div class="item_info">
            <router-link
              tag="a"
              :to="{
                name: 'product',
                params: {
                  category: getProductById(product.id).category,
                  id: product.id
                }
              }"
            >{{ getProductById(product.id).name }}</router-link>
            <p>usd ${{ product.quantity*getProductById(product.id).priceDollar }}</p>
            <p>color: {{ product.color }}</p>
            <p>size: {{ product.size }}</p>
            <p>quantity: {{ product.quantity }}</p>
          </div>
          <button class="remove_button" @click="remove_item">REMOVE</button>
        </div>

      </div>

      <div class="total_block">
        <p>Total USD ${{ totalPrice }}</p>
        <button class="proceed">PROCEED TO CHECKOUT</button>
      </div>

    </div>



  </section>
</template>

<script>
export default {
  methods: {
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
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // закрываем модальное окно корзины покупок
      vm.$store.state.bag.bagIsActive = false
    })
  }
}
</script>

<style scoped>
  #bag_full {
    padding-top: 3.9vw;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.8vw;
  }

  .bag_wrap {
    /* background: #eee; */
    width: 38%;
  }

  .bag_wrap .header_block {
    width: 100%;
    height: 2em;
    font-size: 1.3em;
    font-weight: bold;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
  }

  .bag_wrap .header_block span {
    font-size: 0.6em;
    line-height: 2em;
    color: #777;
    margin-left: 1em;
  }

  .bag_wrap .items_block {
    width: 100%;
  }

  .bag_wrap .items_block .item {
    width: 100%;
    padding: 2em 0;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    border-bottom: 1px solid #D8D8D8;
  }

  .bag_wrap .items_block .item .item_photo {
    width: 30%;
  }

  .bag_wrap .items_block .item .item_photo img {
    width: 100%;
  }

  .bag_wrap .items_block .item .item_info {
    padding: 1em;
    text-transform: uppercase;
  }

  .bag_wrap .items_block .item .item_info a {
    font-size: 1.2em;
    color: black;
    font-weight: bold;
    margin-bottom: 1.5em;
    display: block;
  }

  .bag_wrap .items_block .item .item_info p:first-of-type {
    margin-bottom: 1.5em;
  }

  .bag_wrap .items_block .item .item_info p {
    margin-bottom: 0.3em;
  }

  .bag_wrap .items_block .item .remove_button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 6em;
    height: 3em;
    background: none;
    border: none;
  }

  .bag_wrap .items_block .item .remove_button:focus {
    outline: none;
  }

  .bag_wrap .total_block {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 2em 0;
  }

  .bag_wrap .total_block p {
    font-size: 1.2em;
    font-weight: bold;
  }

  .bag_wrap .total_block .proceed {
    width: 40%;
    height: 3em;
    background: black;
    border: none;
    color: white;
  }

  .bag_wrap .total_block .proceed:focus {
    outline: none;
  }

  /* <div class="total_block">
    <p>Total USD $490</p>
    <button class="proceed">PROCEED TO CHECKOUT</button>
  </div> */


  @media screen and (max-width: 600px) {
    #bag_full {
      padding-top: 15vw;
    }
  }
</style>
