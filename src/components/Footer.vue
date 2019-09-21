<template>
  <footer id="footer">
    <div class="signup_block">
      <h3>SIGN UP FOR UPDATES</h3>
      <p>Sign up for exclusive early sale access and tailored new arrivals.</p>

      <form>
        <input type="submit" value="JOIN">
        <input type="email" placeholder="Your email address">
      </form>


    </div>
    <div class="links_block">
      <div class="item">
        <h3
          @click="customerServiceIsOpened = !customerServiceIsOpened"
          :class="{ hOpened: customerServiceIsOpened, hClosed: !customerServiceIsOpened }"
        >CUSTOMER SERVICE</h3>
        <ul :class="{ item_opened: customerServiceIsOpened }">
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">TRACK ORDER</a></li>
          <li><a href="#">DELIVERY & RETURNS</a></li>
          <li><a href="#">PAYMENT</a></li>
          <li><a href="#">MAKE A RETURN</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div class="item">
        <h3
          @click="infoIsOpened = !infoIsOpened"
          :class="{ hOpened: infoIsOpened, hClosed: !infoIsOpened }"
        >INFO</h3>
        <ul :class="{ item_opened: infoIsOpened }">
          <li><a href="#">GIFT VOUCHERS</a></li>
          <li><a href="#">SIZE GUIDE</a></li>
          <li><a href="#">CAREERS AT MYSHOP</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">LEGAL POLICES</a></li>
        </ul>
      </div>
      <div class="item social">
        <h3
          @click="followUsIsOpened = !followUsIsOpened"
          :class="{ hOpened: followUsIsOpened, hClosed: !followUsIsOpened }"
        >FOLLOW US</h3>
        <ul :class="{ item_opened: followUsIsOpened }">
          <li>
            <a href="#">
              <img src="" alt="">
              <span>FACEBOOK</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="">
              <span>ODNOKLASSNIKI</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="">
              <span>INSTAGRAM</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="item contacts">
        <h3
          @click="contactUsIsOpened = !contactUsIsOpened"
          :class="{ hOpened: contactUsIsOpened, hClosed: !contactUsIsOpened }"
        >CONTACT US</h3>
        <ul :class="{ item_opened: contactUsIsOpened }">
          <li>
            <p>hello@myshop.com</p>
          </li>
          <li>
            <p>+7 910 832 26XX</p>
          </li>
          <li>
            <p>Visit us at Shalalaeva 23, Bologoe, Russia</p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      customerServiceIsOpened: false,
      infoIsOpened: false,
      followUsIsOpened: false,
      contactUsIsOpened: false
    }
  },
  computed: {
    customer_service () {
      return this.$store.footer.customer_service
    }
  }
}
</script>

<style scoped>
#footer {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 0.7vw;
}

#footer h3 {
  font-size: 1vw;
  font-weight: bold;
}

.signup_block {
  text-align: center;
  margin-bottom: 10vw;
  margin-top: 3vw;
}

.signup_block form {
  position: relative;
  font-size: 0.85vw;
  margin-top: 1.6vw;
  height: 1.8vw;
  max-width: 80vw;
}

.signup_block input[type=email] {
  width: 28vw;
  height: 100%;
  padding: 0 2%;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid #D8D8D8;
}

.signup_block input[type=text]:focus {
  outline: none;
}

.signup_block input[type=submit] {
  position: absolute;
  height: 100%;
  right: 0;
  border: none;
  background: transparent;
  font-weight: bold;
}

.links_block {
  width: 80vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  line-height: 2em;
  margin-bottom: 2.5vw;
}

.links_block h3 {
  margin-bottom: 1em;
}

.links_block ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.links_block a {
  color: black;
}

.links_block .item {
  max-width: 25%;
  overflow: hidden;
}

@media screen and (max-width: 600px) {
  #footer {
    font-size: 4vw;
  }

  #footer h3 {
    font-size: 6vw;
  }

  .signup_block {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 15vw 0;
  }

  .signup_block form {
    font-size: 3.5vw;
    height: 9vw;
    margin-bottom: 6vw;
    max-width: none;
  }

  .signup_block input[type=email] {
    width: 88vw;
  }

  .links_block {
    flex-direction: column;
    width: 90vw;
    margin-bottom: 9vw;
  }

  .links_block .item {
    max-width: 100%;
    border-top: 1px dashed #D8D8D8;
  }

  .links_block .item:last-child {
    border-bottom: 1px dashed #D8D8D8;
  }

  #footer .links_block h3 {
    font-weight: 400;
    margin: 0;
    padding: 5vw 0;
  }

  .links_block h3.hOpened:before {
    display: inline-block;
    width: 0.8em;
    content: "- "
  }

  .links_block h3.hClosed:before {
    display: inline-block;
    width: 0.8em;
    content: "+ "
  }

  .links_block ul {
    line-height: 2.5em;
    max-height: 0;
    padding-bottom: 0;
    transition: max-height 0.3s ease, padding-bottom 0.3s ease;
  }

  .links_block ul.item_opened {
    max-height: 70vw;
    padding-bottom: 5vw;
  }

  .links_block .item p {
    padding: 0;
    margin: 0;
  }
}
</style>
