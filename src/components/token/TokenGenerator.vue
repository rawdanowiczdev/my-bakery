<template>
  <base-section>
    <template #title>
      <h2>Token generator</h2>
    </template>

    <template #button>
      <base-button mode="green" type="submit" form="token-form"
        >POST token</base-button
      >
    </template>

    <template #section>
      <form
        id="token-form"
        class="section__form"
        ref="form"
        @submit.prevent="createUser"
      >
        <div class="section__form-element">
          <label for="email">Email</label>
          <input
            class="section__form-input"
            id="email"
            type="email"
            autocomplete="off"
            ref="email"
          />
        </div>

        <div class="section__form-element">
          <label for="pass">Password</label>
          <input
            class="section__form-input"
            id="pass"
            type="password"
            ref="pass"
          />
        </div>

        <div class="section__form-element section__form-element--check">
          <input
            class="section__form-input section__form-input--check"
            id="resend"
            type="checkbox"
            v-model="resend"
          />
          <label for="resend">Get new token for existing user</label>
        </div>
      </form>

      <div class="section__text section__errors" v-if="errors.length > 0">
        <ul v-for="err in errors" :key="err">
          <li class="section__error">{{ err }}</li>
        </ul>
      </div>

      <div v-if="token">
        <h4>Your Token:</h4>
        <p class="section__text token" ref="token">
          {{ token }}
          <span class="token__copy" @click="copy">Copy</span>
        </p>
      </div>
    </template>
  </base-section>
</template>

<script>
export default {
  data() {
    return {
      token: null,
      errors: [],
      resend: false,
    };
  },
  computed: {
    URI() {
      if (this.resend) {
        return "https://rawdanowiczdev.pl/bakery-api/auth/resend/";
      } else {
        return "https://rawdanowiczdev.pl/bakery-api/auth/signup/";
      }
    },
  },
  methods: {
    createUser() {
      this.errors.length = 0;

      const user = {
        email: this.$refs.email.value,
        password: this.$refs.pass.value,
      };

      const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!validEmail.test(user.email)) {
        this.errors.push("Please enter valid email.");
      }
      if (user.password.length < 6 || user.password.length > 20) {
        this.errors.push(
          "Password should contain between 6 and 20 characters."
        );
      }

      if (this.errors.length === 0) {
        fetch(this.URI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            this.errors.unshift(`${response.status} ${response.statusText}`);
          })
          .then((data) => {
            this.token = data.token;
            this.$refs.form.reset();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    copy() {
      navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.clipboard.writeText(this.token);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colors";

.token {
  padding: 5px;
  word-break: break-all;
  position: relative;
  border-radius: 2px;
  color: $green;
  background-color: rgba($green, 0.1);
  animation: showToken 0.2s;

  &__copy {
    visibility: hidden;
    display: block;
    padding: 5px 10px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: $gray;
    text-transform: uppercase;
    transition: visibility 0.2s;
    cursor: pointer;
  }

  &:hover &__copy,
  &:focus &__copy {
    visibility: visible;
  }

  @keyframes showToken {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
