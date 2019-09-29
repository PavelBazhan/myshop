<template>
  <section id="sign_form">
    <div class="sign_wrap">

      <div class="create_account_block" :class="{ active : (signFormType == 'signin') }">
        <p class="title">create account</p>
        <div class="form">
          <form>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              v-model="firstName"
              :class="{ 'invalid': $v.firstName.$error }"
              @blur.lazy="$v.firstName.$touch()">
              <div class="error" v-if="$v.firstName.$error && !$v.firstName.required">First name is required</div>
              <div class="error" v-if="$v.firstName.$error && !$v.firstName.alpha">Only latin characters are supported</div>

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              v-model="lastName"
              :class="{ 'invalid': $v.lastName.$error }"
              @blur.lazy="$v.lastName.$touch()">
              <div class="error" v-if="$v.lastName.$error && !$v.lastName.required">Last name is required</div>
              <div class="error" v-if="$v.lastName.$error && !$v.lastName.alpha">Only latin characters are supported</div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              v-model="regEmail"
              :class="{ 'invalid': $v.regEmail.$error }"
              @blur.lazy="$v.regEmail.$touch()">
              <div class="error" v-if="$v.regEmail.$error && !$v.regEmail.required">Email is required</div>
              <div class="error" v-if="$v.regEmail.$error && !$v.regEmail.email">Invalid email address</div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              v-model="regPassword"
              :class="{ 'invalid': $v.regPassword.$error }"
              @blur.lazy="$v.regPassword.$touch()">
              <div class="error" v-if="$v.regPassword.$error && !$v.regPassword.required">Password is required</div>
              <div class="error" v-if="$v.regPassword.$error && !$v.regPassword.minLength">
                The password must contain at least 6 characters
              </div>
              <div class="error" v-if="$v.regPassword.$error && !$v.regPassword.alphaNum && $v.regPassword.minLength">
                Only latin characters and numbers are supported
              </div>
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
          <button
            class="sign_button"
            :disabled="!regFormIsValid">
            SIGN UP</button>
        </div>
        <div class="switch_form">
          <button @click="switchForm">I HAVE AN ACCOUNT</button>
        </div>
      </div>

      <div class="create_account_block" :class="{ active : (signFormType != 'signin') }">
        <p class="title">log in</p>
        <div class="form">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              v-model="loginEmail"
              :class="{ 'invalid': $v.loginEmail.$error }"
              @blur.lazy="$v.loginEmail.$touch()">
              <div class="error" v-if="$v.loginEmail.$error && !$v.loginEmail.required">Email is required</div>
              <div class="error" v-if="$v.loginEmail.$error && !$v.loginEmail.email">Invalid email address</div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              v-model="loginPassword"
              :class="{ 'invalid': $v.loginPassword.$error }"
              @blur.lazy="$v.loginPassword.$touch()">
              <div class="error" v-if="$v.loginPassword.$error && !$v.loginPassword.required">Password is required</div>
              <div class="error" v-if="$v.loginPassword.$error && !$v.loginPassword.minLength">
                The password must contain at least 6 characters
              </div>
              <div class="error" v-if="$v.loginPassword.$error && !$v.loginPassword.alphaNum && $v.loginPassword.minLength">
                Only latin characters and numbers are supported
              </div>
          </form>
        </div>
        <p class="forgotten">
          <a href="#">Forgotten your password?</a>
        </p>
        <div class="button_block">
          <button
            class="sign_button"
            :disabled="!loginFormIsValid">
            SIGN IN</button>
        </div>
        <div class="switch_form">
          <button @click="switchForm">I DON'T HAVE AN ACCOUNT</button>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
import { required, email, alpha, alphaNum, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      signFormType: 'signup',

      firstName: '',
      lastName: '',
      regEmail: '',
      regPassword: '',
      loginEmail: '',
      loginPassword: ''
    }
  },
  computed: {
    regFormIsValid () {
      let out = !this.$v.firstName.$invalid && !this.$v.lastName.$invalid && !this.$v.regEmail.$invalid && !this.$v.regPassword.$invalid
      return out
    },
    loginFormIsValid () {
      let out = !this.$v.loginEmail.$invalid && !this.$v.loginPassword.$invalid
      return out
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
  },
  validations: {
    firstName: {
      required,
      alpha
    },
    lastName: {
      required,
      alpha
    },
    regEmail: {
      required,
      email
    },
    regPassword: {
      required,
      alphaNum,
      minLength: minLength(6)
    },
    loginEmail: {
      required,
      email
    },
    loginPassword: {
      required,
      alphaNum,
      minLength: minLength(6)
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

  .create_account_block div.form form input.invalid {
    border-bottom: 1px solid #D8000C;
  }

  .create_account_block div.form form .error {
    text-align: right;
    margin-top: -1em;
    color: #D8000C;
  }

  .create_account_block div.form form .error:last-child {
    margin-bottom: 1em;
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

  .create_account_block .button_block .sign_button[disabled] {
    background: #aaa;
    color: #ddd;
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
