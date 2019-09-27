export default {
  state: {
    bagIsActive: true,
    bagItems: [
      { id: 11933, color: "brown", size: 'm', quantity: 2 },
      { id: 11534, color: "pink", size: 'xs', quantity: 3 },
      { id: 12001, color: "black", size: 'm', quantity: 1 }
    ]
  },
  mutations: {
    switchBagIsActive (state) {
      state.bagIsActive = !state.bagIsActive
    },
    addToBag (state, item) {
      console.log(state.bagItems)
      for (let i = 0; i < state.bagItems.length; i++) {

        if (
          (item.id == state.bagItems[i].id) &&
          (item.color == state.bagItems[i].color) &&
          (item.size == state.bagItems[i].size)
        ) {
          state.bagItems[i].quantity++
          return
        }
      }
      item.quantity = 1
      state.bagItems.unshift(item)
      // console.log(state.bagItems)
    }
  },
  actions: {

  },
  getters: {
    generalQuantity (state) {
      let quan = 0
      for (let i = 0; i < state.bagItems.length; i++) {
        quan += state.bagItems[i].quantity
      }
      return quan
    }
  }
}
