<template>
  <section id="collections">

    <div class="collection_block">
      <div class="background" :style="{ backgroundImage: `url('./images/${newcollection_block_item.backgroundImage}')`}">
        <div class="item">
          <h2>{{ newcollection_block_item.title }}</h2>
          <p>{{ newcollection_block_item.description }}</p>
          <router-link tag="a" :to="{name: 'shop', query: {nc: null}}">
            <button>{{ newcollection_block_item.buttonTitle }}</button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="collection_block" v-for="block in collection_block_item" :key="block.title">
      <div class="background" :style="{ backgroundImage: `url('./images/${block.backgroundImage}')`}">
        <div class="item">
          <h2>{{ block.title }}</h2>
          <p>{{ block.description }}</p>

          <router-link tag="a" :to="{name: 'shop'}">
            <button>{{ block.buttonTitle }}</button>
          </router-link>
        </div>
      </div>

      <div class="extra-images" v-if="block.extraImages">
        <router-link
          tag="a"
          to="/catalog/coats/11534"
          :style="{ backgroundImage: `url('./images/${block.extraImages[0].pathPic}')`}"
        >
          <div class="link_cover">
            <div class="title">
              <p>{{ block.extraImages[0].title }}</p>
            </div>
          </div>
        </router-link>
        <router-link
          tag="a"
          to="/catalog/coats/11933"
          :style="{ backgroundImage: `url('./images/${block.extraImages[1].pathPic}')`}"
        >
          <div class="link_cover">
            <div class="title">
              <p>{{ block.extraImages[1].title }}</p>
            </div>
          </div>
        </router-link>
        <router-link
          tag="a"
          to="/catalog/dresses/12002"
          :style="{ backgroundImage: `url('./images/${block.extraImages[2].pathPic}')`}"
        >
          <div class="link_cover">
            <div class="title">
              <p>{{ block.extraImages[2].title }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <app-insta-shop></app-insta-shop>

  </section>
</template>

<script>
import InstaShop from '../components/InstaShop.vue'

export default {
  methods: {
  },
  computed: {
    collection_block_item () {
      return this.$store.state.collections.collections
    },
    newcollection_block_item () {
      return this.$store.state.collections.newCollection
    }
  },
  components: {
    appInstaShop: InstaShop
  }
}
</script>

<style scoped>
  section#collections {
    font-family: 'Muli', sans-serif;
  }

  .collection_block {
    width: 100%;
    position: relative;
    margin-bottom: 3vw;
  }

  .collection_block .background {
    width: 100%;
    height: 52vw;
    position: relative;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .collection_block .item {
    max-width: 42vw;
    position: absolute;
    right: auto;
    bottom: 6vw;
    left: 10.5vw;
    background: rgba(0, 0, 0, 0.5);
    padding: 1.5vw 2vw;
    box-sizing: content-box;
    color: white;
  }

  .collection_block .item h2 {
    font-size: 2.5vw;
    font-weight: 800;
    margin-bottom: 1vw;
  }

  .collection_block .item p {
    font-size: 0.9vw;
    line-height: 1.2em;
    margin-bottom: 1.5vw;
  }

  .collection_block .item button {
    width: 17vw;
    height: 3vw;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    border: 1px solid white;
    font-size: 0.8vw;
    line-height: 1.2em;
    color: white;
    z-index: 1;
    overflow: hidden;
    transition: color 0.3s;
  }

  .collection_block .item button:hover {
    color: black;
  }

  .collection_block .extra-images {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .collection_block .extra-images a {
    display: block;
    width: 30%;
    height: 40vw;
    background-size: cover;
    background-position: center center;
    color: black;
    overflow: hidden;
  }

  .collection_block .extra-images .link_cover {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.0);
    transition: background 0.2s ease;
  }

  .collection_block .extra-images a:hover .link_cover {
    background: rgba(0, 0, 0, 0.5);
  }

  .collection_block .extra-images .link_cover .title {
    position: absolute;
    width: 70%;
    bottom: 10%;
    right: -70%;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(255, 255, 255, 0);
    transition: transform 0.2s ease, border-bottom-color 1s ease;
  }

  .collection_block .extra-images a:hover .title {
    transform: translateX(-110%);
    border-bottom-color: rgba(255, 255, 255, 1);
  }

  .collection_block .extra-images .link_cover .title p {
    color: rgba(255, 255, 255, 0);
    font-size: 2em;
    text-align: right;
    line-height: 1.2em;
    margin-bottom: 0.3em;
    transition: color 0.6s ease;
  }

  .collection_block .extra-images a:hover .title p {
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (min-width: 601px) {
    .collection_block:nth-child(2n) .item {
      right: auto;
      left: 10.5vw;
      bottom: 22vw;
    }

    .collection_block:nth-child(3n) .item {
      right: 8vw;
      left: auto;
      bottom: 6vw;
    }

    .collection_block .item button:before {
      content: "";
      display: block;
      width: 18vw;
      height: 18vw;
      position: absolute;
      left: -0.5vw;
      top: 3vw;
      border-radius: 50%;
      background: white;
      z-index: -1;
      transition: transform 0.3s;
    }

    .collection_block .item button:hover:before {
      transform: translateY(calc(-1.5vw - 9vw));
    }
  }

  @media screen and (max-width: 600px) {
    .collection_block {
      background-size: auto 100%;
    }

    .collection_block:last-of-type {
      margin-bottom: 0;
    }

    .collection_block .background {
      height: 145vw;
    }

    .collection_block .item {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      max-width: none;
      position: absolute;
      bottom: 0;
      left: 0;
      background: white;
      padding: 0;
      color: black;
      border-bottom: 1px solid #aaa;
    }

    .collection_block .item h2 {
      text-align: center;
      font-size: 12vw;
      line-height: 1em;
      margin-top: 5vw;
      margin-bottom: 3.5vw;
    }

    .collection_block .item p {
      max-width: 80%;
      text-align: center;
      font-size: 3vw;
      margin-bottom: 6.5vw;
    }

    .collection_block .extra-images {
      display: none;
    }

    .collection_block .item button {
      width: 70vw;
      height: 12vw;
      position: relative;
      box-sizing: border-box;
      background: transparent;
      border: 1px solid black;
      font-size: 3.5vw;
      line-height: 1.2em;
      color: black;
      z-index: 1;
      overflow: hidden;
      transition: color 0.3s;
      margin-bottom: 5vw;
    }

  }
</style>
