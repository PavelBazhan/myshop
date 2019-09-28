<template>
  <section id="sign_form">
    <div class="sign_wrap">

      <div class="create_account_block" :class="{ active : (signFormType == 'signin') }">
        <p class="title">create account</p>
        <div class="form">
          <form>
            <input type="text" name="first_name" value="" placeholder="First Name">
            <input type="text" name="last_name" value="" placeholder="Last Name">
            <input type="email" name="email" value="" placeholder="Email">
            <input type="password" name="password" value="" placeholder="Password">
          </form>
        </div>
        <div class="personal">
          <div class="check">
            <input type="checkbox" name="" value="">
          </div>
          <div class="description">
            <p>We'll send you only the good stuff:</p>
            <p>Early access to Sale, new arrivals and promotions.</p>
          </div>
        </div>
        <p class="terms_and_privacy">
          By signing up you agree to
          <a href="#">Terms of Service</a> and
          <a href="#">Privacy Policy</a>
        </p>
        <div class="button_block">
          <button class="sign_button">SIGN UP</button>
        </div>
        <div class="switch_form">
          <button @click="switchForm">I HAVE AN ACCOUNT</button>
        </div>
      </div>

      <div class="create_account_block" :class="{ active : (signFormType != 'signin') }">
        <p class="title">log in</p>
        <div class="form">
          <form>
            <input type="email" name="email" value="" placeholder="Email">
            <input type="password" name="password" value="" placeholder="Password">
          </form>
        </div>
        <p class="forgotten">
          <a href="#">Forgotten your password?</a>
        </p>
        <div class="button_block">
          <button class="sign_button">SIGN IN</button>
        </div>
        <div class="switch_form">
          <button @click="switchForm">I DON'T HAVE AN ACCOUNT</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      signFormType: 'signup'
    }
  },
  methods: {
    switchForm () {
      if (this.signFormType == 'signup') {
        this.signFormType = 'signin'
      } else {
        this.signFormType = 'signup'
      }
    }
  }
}
</script>

<style scoped>
  #sign_form {
    padding-top: 3.9vw;
    display: flex;
    justify-content: center;
    font-size: 0.8vw;
    min-height: 80vh;
  }

  .sign_wrap {
    width: 70%;
    margin: 5vw 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .create_account_block {
    box-sizing: content-box;
    width: 50%;
    padding: 0 5%;
  }

  .create_account_block:first-child {
    border-right: 1px solid #D8D8D8;
  }

  .create_account_block  .title {
    font-size: 1.3em;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 2em;
  }

  .create_account_block div.form form {
    display: flex;
    flex-flow: column nowrap;
  }

  .create_account_block div.form form input {
    height: 3em;
    padding: 0.5em;
    margin-bottom: 1em;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #D8D8D8;
  }

  .create_account_block .personal {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1em;
  }

  .create_account_block .personal .check {
    width: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .create_account_block .personal .description p {
    margin: 0;
  }

  .create_account_block .terms_and_privacy {
    color: #8C8C8C;
    margin-bottom: 2em;
  }

  .create_account_block .terms_and_privacy a {
    color: black;
  }

  .create_account_block .button_block {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }

  .create_account_block .button_block .sign_button {
    width: 15em;
    height: 3em;
    background: black;
    color: white;
    border: none;
  }

  .create_account_block .forgotten a {
    color: black;
    text-decoration: underline;
  }

  .create_account_block .switch_form {
    display: none;
  }

  @media screen and (max-width: 600px) {
    #sign_form {
      padding-top: 15vw;
      font-size: 3.5vw;
      min-height: auto;
    }

    /* #sign_form {
      padding-top: 3.9vw;
      display: flex;
      justify-content: center;
      font-size: 0.8vw;
      min-height: 80vh;
    } */

    .sign_wrap {
      flex-direction: column;
      width: 90%;
      margin: 15vw 0;
    }

    .create_account_block {
      padding: 0;
      width: 100%;
      display: none;
    }

    .create_account_block.active {
      display: block;
    }

    .create_account_block:first-child {
      border-right: none;
    }

    .create_account_block .switch_form {
      height: 4em;
      position: relative;
      display: block;
    }

    .create_account_block .switch_form button {
      height: 3em;
      position: absolute;
      bottom: 0;
      background: none;
      border: none;
      text-decoration: underline;
    }

    .create_account_block .switch_form button:focus {
      outline: none;
    }
  }
</style>
