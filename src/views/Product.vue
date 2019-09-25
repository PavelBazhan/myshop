<template>
  <section id="product">
    <div class="images_wrap">
      <div class="images_inner">
        <div class="image">
          <img src="/images/shop/11534_pink_1.jpg" alt="">
        </div>
        <div class="image">
          <img src="/images/shop/11534_pink_0.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="description_wrap">
      <div class="description">
        <p class="collection_name">VINTAGE INSPIRED</p>
        <p class="title">Cropped parka with faux fur hood trim</p>
        <p class="price">USD <strong>$100</strong></p>
        <p class="color">COLOR: Pink</p>
        <div class="color_panel">
          <label>
            <input type="radio" name="choosen_color" value="">
            <div class="color_block gray"></div>
          </label>
          <label>
            <input type="radio" name="choosen_color" value="">
            <div class="color_block black"></div>
          </label>
          <label>
            <input type="radio" name="choosen_color" value="">
            <div class="color_block pink active"></div>
          </label>
          <label>
            <input type="radio" name="choosen_color" value="">
            <div class="color_block red"></div>
          </label>
          <label>
            <input type="radio" name="choosen_color" value="">
            <div class="color_block blue"></div>
          </label>
          <label>
            <input type="radio" name="choosen_color" value="">
            <div class="color_block green"></div>
          </label>
          <label>
            <input type="radio" name="choosen_color" value="">
            <div class="color_block white"></div>
          </label>
        </div>
        <p class="size">SIZE</p>
        <div class="size_panel">
          <label>
            <input type="radio" name="choosen_size" value="">
            <div class="size_block">XS</div>
          </label>
          <label>
            <input type="radio" name="choosen_size" value="">
            <div class="size_block active">S</div>
          </label>
          <label>
            <input type="radio" name="choosen_size" value="">
            <div class="size_block">M</div>
          </label>
        </div>
        <button class="add_to_bag">ADD TO BAG</button>
        <ul class="extra_info">
          <li class="desc_opened">
            <p class="title">PRODUCT DESCRIPTION</p>
            <p class="info">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. </p>
          </li>
          <li>
            <p class="title">SHIPPING & RETURNS</p>
            <p class="info">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. </p>
          </li>
          <li>
            <p class="title">FABRIC COMPOSITION</p>
            <p class="info">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel. </p>
          </li>
        </ul>
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
}

.images_inner {
  display: flex;
  flex-flow: row nowrap;
}

.images_inner .image {
  /* width: 50%; */
}

.images_inner  .image:last-child {
  border-left: 1px solid rgba(0, 0, 0, 0.3);
}

.images_inner  .image img {
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

.color_panel .gray {
  background: gray;
}

.color_panel .black {
  background: black;
}

.color_panel .pink {
  background: #FFCCFF;
}

.color_panel .red {
  background: #FF6666;
}

.color_panel .blue {
  background: blue;
}

.color_panel .green {
  background: green;
}

.color_panel .white {
  background: white;
  border: 1px solid #aaa;
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

</style>
