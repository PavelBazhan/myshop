<template>
  <section id="product">
    <div class="images_wrap">
      <div class="image">
        <img src="/images/shop/11534_pink_1.jpg" alt="">
      </div>
      <div class="image">
        <img src="/images/shop/11534_pink_0.jpg" alt="">
      </div>
    </div>
    <div class="description_wrap">
      <div class="description">
        <p class="collection_name">VINTAGE INSPIRED</p>
        <p>Cropped parka with faux fur hood trim</p>
        <p>USD $100</p>
        <p class="color">color</p>
        <div class="color_panel">
          <div class="color">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  methods: {

  },
  components: {

  },
  computed: {

  }
}
</script>

<style scoped>
#product {
  width: 100%;
  padding-top: 5vw;
  display: flex;
  flex-flow: row nowrap;
}

.images_wrap {
  width: 75%;
  display: flex;
  flex-flow: row nowrap;
}

.images_wrap .image {
  width: 50%;
}

.images_wrap .image:last-child {
  border-left: 1px solid rgba(0, 0, 0, 0.3);
}

.images_wrap .image img {
  width: 100%;
}

.description_wrap {
  width: 25%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.description {
  width: 70%;
}


</style>
