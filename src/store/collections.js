export default {
  state: {
    newCollection: {
      title: "NEW COLLECTION",
      description: `Our easiest chuck-on-and-go staples come with a serious style
      heritage that’s liberating, sexy, comfy and supremely cool.`,
      buttonTitle: "SHOP NEW ARRIVALS",
      backgroundImage: "newcollection.jpg"
    },
    collections: [
      {
        title: "VINTAGE INSPIRED",
        description: `Inspired by the ‘70s and 80’s), we know that if you sift through
        our vintage inspired collection you’re gonna rock the perfect silhouette.`,
        buttonTitle: "SHOP NOW",
        backgroundImage: "vintage_inspired.jpg",
        extraImages: [
          { pathPic: "vintage_inspired_extra01.jpg", pathUrl: "#", title: "Cowboy boots with metallic toecaps"},
          { pathPic: "vintage_inspired_extra02.jpg", pathUrl: "#", title: "Iridescent tote bag" },
          { pathPic: "vintage_inspired_extra03.jpg", pathUrl: "#", title: "Crossbody bag with foldover flap and ring" }
        ]
      },
      {
        title: "SUSTAINABLE DENIM",
        description: `What started as a true ‘80s vintage pair of jeans,
        finished as a re-energised, wider leg vintage jean with versatile detailing. `,
        buttonTitle: "SHOP DENIM",
        backgroundImage: "sustainable_denim.jpg"
      },
      {
        title: "PRAY FOR ROCK",
        description: `Beloved and forever relevant, there’s a convenience factor in
        a well-built pair of all-in-ones. `,
        buttonTitle: "SHOP COLLECTION",
        backgroundImage: "pray_for_rock.jpg"
      }
    ],
    instashop: [
      { pathPic: "instashop/ishop01.jpg", pathUrl: "#", title: "@fashionfabrique_com"},
      { pathPic: "instashop/ishop02.jpg", pathUrl: "#", title: "@fashion.vinegret"},
      { pathPic: "instashop/ishop03.jpg", pathUrl: "#", title: "@modess.fashion"},
      { pathPic: "instashop/ishop04.jpg", pathUrl: "#", title: "@malina_fashion"},
      { pathPic: "instashop/ishop05.jpg", pathUrl: "#", title: "@zirkusfashion"}
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}
