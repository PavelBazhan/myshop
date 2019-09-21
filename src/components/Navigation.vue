<template>
  <header id="navigation">
  <nav :class="{ white_nav : (curRoute != '/') }">
    <div class="menu">

      <ul class="navi">
        <a href="#" @click="dropDownMenuIsOpened = !dropDownMenuIsOpened" class="hamburger menu">
          <li></li>
        </a>

        <router-link tag="a" to="/" active-class="menu_active" exact>
          <li>
            <span>COLLECTIONS</span>
          </li>
        </router-link>
        <router-link tag="a" to="/new_collection" active-class="menu_active">
          <li>
            <span>NEW ARRIVALS</span>
          </li>
        </router-link>
        <router-link tag="a" to="/catalog" active-class="menu_active">
          <li>
            <span>SHOP</span>
          </li>
        </router-link>

      </ul>

      <ul class="navi">
        <router-link tag="a" to="#">
          <li>
            <div class="icon navi_search"></div>
            <span>SEARCH</span>
          </li>
        </router-link>
        <router-link tag="a" to="/registration" active-class="menu_active">
          <li>
            <span>SIGN IN</span>
          </li>
        </router-link>
        <router-link tag="a" to="/buy_cart" active-class="menu_active">
          <li>
            <div class="icon navi_bag"></div>
            <span>BAG</span>
          </li>
        </router-link>

        <a href="#" class="hamburger search">
          <li></li>
        </a>
        <router-link tag="a" to="/buy_cart" class="hamburger bag">
          <li></li>
        </router-link>
      </ul>

    </div>
    <div class="logo"  @click="dropDownMenuIsOpened = false">
      <router-link tag="a" to="/">
        <span>{{ title }}</span>
      </router-link>
    </div>
  </nav>

  <div class="drop_down_menu" :class="{ opened: dropDownMenuIsOpened, white_ddmenu : (curRoute != '/') }">
    <ul>
      <router-link tag="a" to="/">
        <li @click="switchDropDownMenu">
          <span>COLLECTIONS</span>
        </li>
      </router-link>
      <router-link tag="a" to="/new_collection">
        <li @click="switchDropDownMenu">
          <span>NEW ARRIVALS</span>
        </li>
      </router-link>
      <router-link tag="a" to="/catalog">
        <li @click="switchDropDownMenu">
          <span>SHOP</span>
        </li>
      </router-link>
      <router-link tag="a" to="/registration">
        <li @click="switchDropDownMenu">
          <span>SIGN IN</span>
        </li>
      </router-link>
    </ul>
  </div>

  </header>

</template>

<script>
export default {
  data () {
    return {
      title: "MYSHOP",
      dropDownMenuIsOpened: false
    }
  },
  methods: {
    switchDropDownMenu () {
      this.dropDownMenuIsOpened = !this.dropDownMenuIsOpened
    }
  },
  computed: {
    curRoute () {
      return this.$route.path
    },
    dub () {
      return this.$store.state.dub
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Muli', sans-serif;
  color: white;
}

a {
  text-decoration: none;
}

#navigation {
  position: absolute;
  width: 100%;
  height: 3.9vw;
}

nav {
  position: absolute;
  width: 100%;
  height: 3.9vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1vw;
  z-index: 5;
}

nav.white_nav {
  background: transparent;
}

nav.white_nav span {
  color: black;
}

nav .menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav .menu ul.navi {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

nav .menu .navi li {
  height: 3.9vw;
  font-size: 0.8vw;
  padding: 0 1.5vw 0;
  list-style-type: none;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

nav .menu .navi a {
  position: relative;
}

.menu_active li {
  border-bottom: 2px solid #ddd;
  border-top: 2px solid rgba(0, 0, 0, 0);
}

nav.white_nav .menu_active li {
  border-bottom: 2px solid black;
  border-top: 2px solid rgba(0, 0, 0, 0);
}

nav .menu .navi a:hover {
  background: #222;
}

nav.white_nav .menu .navi a:hover {
  background: #eee;
}

nav .menu .navi a:not(.hamburger):before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 0;
  height: 2px;
  background: #ddd;
  transition: width 0.5s ease;
}

nav.white_nav .menu .navi a:not(.hamburger):before {
  background: black;
}

nav .menu .navi a:hover:before {
  width: 50.1%;
}

nav .menu .navi a:not(.hamburger):after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #ddd;
  transition: width 0.5s ease;
}

nav.white_nav .menu .navi a:not(.hamburger):after {
  background: black;
}

nav .menu .navi a:hover:after {
  width: 50%;
}

nav .menu .navi a.hamburger:hover {
  background: none;
}

nav .menu .navi li span {
  line-height: 3.9vw;
}

.icon {
  width: 1.5vw;
  height: 1.5vw;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center center;
}

.navi_search {
  background-image: url('../icons/magnifying-glass-white.svg');
}

nav.white_nav .navi_search {
  background-image: url('../icons/magnifying-glass.svg');
}

.navi_bag {
  background-image: url('../icons/shopping-cart-white.svg');
  background-position: left center;
}

nav.white_nav .navi_bag {
  background-image: url('../icons/shopping-cart.svg');
}

nav .logo {
  position: absolute;
  height: 100%;
  font-weight: 800;
  font-size: 2vw;
  letter-spacing: 0.05em;
}

nav .logo a {
  line-height: 3.9vw;
}

nav .menu .navi a.hamburger {
  display: none;
}

.navi a.hamburger li {
  padding: 0;
  width: 10vw;
  height: 10vw;
  border: none;

  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center center;
}

.navi a.menu li {
  background-image: url('../icons/copy-white.svg');
}

nav.white_nav .navi a.menu li {
  background-image: url('../icons/copy.svg');
}

.navi a.search li {
  background-image: url('../icons/magnifying-glass-white.svg');
}

nav.white_nav .navi a.search li {
  background-image: url('../icons/magnifying-glass.svg');
}

.navi a.bag li {
  background-image: url('../icons/shopping-cart-white.svg');
}

nav.white_nav .navi a.bag li {
  background-image: url('../icons/shopping-cart.svg');
}

.drop_down_menu {
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: column;
  padding: 0 1vw;

  position: relative;
  z-index: 1;
  top: -66vw;
  transform: translateY(0vw);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.drop_down_menu.opened {
  transform: translateY(81vw);
  opacity: 1;
}

.drop_down_menu ul {
  margin: 0;
  padding: 3vw 0;
  list-style-type: none;
}

.drop_down_menu ul li {
  width: 95vw;
  height: 15vw;
  padding-left: 2.5vw;
}

.drop_down_menu ul a {
  font-size: 4vw;
  line-height: 15vw;
}

@media screen and (max-width: 600px) {
  nav {
    height: 15vw;
  }

  nav.white_nav {
    border-bottom: 1px solid #aaa;
  }

  nav .menu .navi a.hamburger {
    display: block;
  }

  nav .logo {
    font-size: 5vw;
    line-height: 15vw;
  }

  nav .menu .navi a:not(.hamburger) {
    display: none;
  }
}

</style>
