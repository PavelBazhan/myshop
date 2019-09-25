export default {
  state: {
    newCollection: "VINTAGE INSPIRED",
    goods: [
      {
        name: "Cropped parka with faux fur hood trim",
        category: "coats",
        collection: "VINTAGE INSPIRED",
        priceDollar: 100,
        colors: [ "pink", "black" ],
        sizes: ['xs'],
        id: 11534 ,
        imagesByColor: [
          [ "11534_pink_0.jpg", "11534_pink_1.jpg" ],
          [ "11534_black_0.jpg", "11534_black_1.jpg" ]
        ],
        sale: false
      },
      {
        name: "Wool coat with belt",
        category: "coats",
        collection: "",
        priceDollar: 70,
        colors: [ "gray", "camel"],
        sizes: ['s'],
        id: 11720 ,
        imagesByColor: [
          [ "11720_gray_0.jpg", "11720_gray_1.jpg" ],
          [ "11720_camel_0.jpg", "11720_camel_1.jpg" ]
        ],
        sale: false
      },
      {
        name: "Long belted coat",
        category: "coats",
        collection: "VINTAGE INSPIRED",
        priceDollar: 80,
        colors: [ "stone", "brown" ],
        sizes: ['m'],
        id: 11933 ,
        imagesByColor: [
          [ "11933_stone_0.jpg", "11933_stone_1.jpg" ],
          [ "11933_brown_0.jpg", "11933_brown_1.jpg" ]
        ],
        sale: false
      },
      {
        name: "Short floral dress",
        category: "dresses",
        collection: "SUSTAINABLE DENIM",
        priceDollar: 60,
        colors: [ "black" ],
        sizes: ['xs', 's', 'm', 'xl'],
        id: 11534 ,
        imagesByColor: [
          [ "12001_black_0.jpg", "12001_black_1.jpg" ]
        ],
        sale: false
      },
      {
        name: "Metallic thread dress",
        category: "dresses",
        collection: "PRAY FOR ROCK",
        priceDollar: 25,
        colors: [ "Fuchsia" ],
        sizes: ['l', 'xl'],
        id: 12002 ,
        imagesByColor: [
          [ "12002_fuchsia_0.jpg", "12002_fuchsia_1.jpg" ]
        ],
        sale: false
      }
    ],
    categories: [
      "tops",
      "coats",
      "dresses",
      "tees_and_tanks",
      "shirts",
      "knitwear",
      "jumpsuits",
      "bottoms",
      "intimates",
      "shorts",
      "jeans",
      "skirts"
    ],
    filters: {
      size: ['xs', 's', 'm', 'l', 'xl']
    },
    sizeChecked: [],
    newCollectionShowed: false,
    currentPriceFrom: 0,
    currentPriceTo: 0,
    sorts: [
      {name: 'Popularity', value: 'pop'},
      {name: 'Price Low to High', value: 'prlowtohigh'},
      {name: 'Price High to Low', value: 'prhightolow'},
    ],
    sortType: 'pop'
  },
  mutations: {
    updateSizeChecked (state, value) {
      state.sizeChecked = value;
    },
    updateNewCollectionShowed (state, value) {
      state.newCollectionShowed = value;
    },
    updateCurrentPriceFrom (state, value) {
      state.currentPriceFrom = value
    },
    updateCurrentPriceTo(state, value) {
      state.currentPriceTo = value
    },
    updateSortType(state, value) {
      state.sortType = value
    }
  },
  actions: {
    clearFilter (context) {
      context.state.sizeChecked = [];
      context.state.newCollectionShowed = false;

      context.state.currentPriceFrom = context.getters.priceFrom;
      context.state.currentPriceTo = context.getters.priceTo;

      context.state.sortType = 'pop';
    }
  },
  getters: {
    priceFrom (state) {
      let minPrice = state.goods[0].priceDollar
      for (let i = 0; i < state.goods.length; i++) {
        if (state.goods[i].priceDollar < minPrice) {
          minPrice = state.goods[i].priceDollar
        }
      }
      return minPrice
    },
    priceTo (state) {
      let maxPrice = state.goods[0].priceDollar
      for (let i = 0; i < state.goods.length; i++) {
        if (state.goods[i].priceDollar > maxPrice) {
          maxPrice = state.goods[i].priceDollar
        }
      }
      return maxPrice
    },
  }
}
