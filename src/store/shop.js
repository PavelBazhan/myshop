export default {
  state: {
    newCollection: "VINTAGE INSPIRED",
    goods: [
      {
        name: "Cropped parka with faux fur hood trim",
        category: "coats",
        collection: "VINTAGE INSPIRED",
        priceDollar: 80,
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
        colors: [ "gray", "camel", "black" ],
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
        priceDollar: 50,
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
    newCollectionShowed: false
  },
  mutations: {
    updateSizeChecked(state, value) {
      state.sizeChecked = value;
    },
    updateNewCollectionShowed(state, value) {
      state.newCollectionShowed = value;
    },
  },
  actions: {

  },
  getters: {

  }
}
