<template>
  <div class="instashop_wrap">
    <div class="instashop">

      <div class="link_block">
        <a href="#">SHOP INSTAGRAM</a>
      </div>

      <div class="gallery">
        <div class="item_wrap">
          <div class="item">
            <a href="#" target="_blank" :style="{ backgroundImage: `url(./images/${instashop_block[0].pathPic})` }">
              <div class="link_cover">
                <div class="title">
                  <p>{{ instashop_block[0].title }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="item_wrap">
          <div class="item" v-for="(galleryItem, ind) of instashop_block" v-if="ind && ind<=4">
            <a
              href="#"
              target="_blank"
              :style="{ backgroundImage: `url(./images/${galleryItem.pathPic})` }"
            >
              <div class="link_cover">
                <div class="title">
                  <p>{{ galleryItem.title }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="link_block">
        <a href="#">#{{ $store.state.title }}</a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      instashop_block () {
        return this.$store.state.collections.instashop
      }
    }
  }
</script>

<style scoped>

.instashop_wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5vw;
}

.instashop {
  display: flex;
  flex-flow: column nowrap;
}

.instashop .link_block {
  height: 4vw;
}

.instashop .link_block a {
  display: block;
  font-size: 1vw;
  line-height: 4vw;
  color: black;
}

.gallery {
  display: inline-flex;
  flex-flow: row nowrap;
}

.item_wrap {
  width: 40vw;
  height: 40vw;
}

.item_wrap:last-child {
  display: flex;
  flex-flow: row wrap;
}

.item_wrap:first-child .item {
  width: 100%;
  height: 100%;
}

.item_wrap .item {
  width: 50%;
  height: 50%;
  overflow: hidden;
}

.item a {
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
}

@media screen and (min-width: 601px) {
  .item .link_cover {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.0);
    transition: background 0.2s ease;
  }

  .item a:hover .link_cover {
    background: rgba(0, 0, 0, 0.5);
  }

  .item .link_cover .title {
    position: absolute;
    width: 70%;
    bottom: 10%;
    right: -70%;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(255, 255, 255, 0);
    transition: transform 0.2s ease, border-bottom-color 1s ease;
  }

  .item a:hover .link_cover .title {
    transform: translateX(-110%);
    border-bottom-color: rgba(255, 255, 255, 1);
  }

  .item .link_cover .title p {
    color: rgba(255, 255, 255, 0);
    font-size: 1vw;
    text-align: right;
    line-height: 1.2em;
    margin-bottom: 0.3em;
    transition: color 0.6s ease;
  }

  .item_wrap:first-child .item .link_cover .title p {
    font-size: 2vw;
  }

  .item a:hover .title p {
    color: rgba(255, 255, 255, 1);
  }
}

@media screen and (max-width: 600px) {
  .instashop_wrap {
    margin-top: -3vw;
  }

  .item .link_cover {
    display: none;
  }

  .instashop .link_block {
    height: 12vw;
  }

  .instashop .link_block a {
    display: block;
    font-size: 3.5vw;
    line-height: 12vw;
    color: black;
  }

  .gallery {
    display: inline-flex;
    flex-flow: column nowrap;
  }

  .item_wrap {
    width: 90vw;
    height: 90vw;
  }
}

</style>
