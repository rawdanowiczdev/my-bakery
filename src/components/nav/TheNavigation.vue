<template>
  <nav>
    <ul class="menu" :class="menuOpen ? 'menu--open' : ''">
      <li>
        <router-link class="menu__link" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="menu__link" to="/">Breads</router-link>
      </li>
      <li>
        <router-link class="menu__link" to="/">Rolls</router-link>
      </li>
      <li>
        <router-link class="menu__link" to="/">Add new</router-link>
      </li>
      <li>
        <router-link class="menu__link menu__link--token" to="/"
          >Get token</router-link
        >
      </li>
    </ul>

    <button class="hamburger" @click="toggleMenu">
      <div class="hamburger__bar"></div>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colors";

nav {
  height: 52px;
}

.menu {
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 220px;
  justify-content: space-between;
  align-items: flex-start;
  transform: translateY(-100%);
  transition: transform 0.2s;
  background-color: lighten($light, 10%);

  &__link {
    padding: 10px 10px 10px 20px;
    display: inline-block;
    white-space: nowrap;
    font-size: 15px;
    color: $black;
    text-transform: uppercase;
  }

  &--open {
    transform: translateY(0);
  }
}

.bar {
  height: 3px;
  width: 35px;
  background-color: $black;
  display: inline-block;
  border-radius: 4px;
}

.hamburger {
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  right: 10px;
  height: 32px;
  padding: 2px 5px;
  background-color: transparent;
  border: 0;

  &__bar {
    @extend .bar;

    transform: translateY(calc(-50% - 5px));

    &::after {
      @extend .bar;

      content: "";
      transform: translateY(50%);
    }
  }
}

@media (min-width: 1024px) {
  nav {
    height: inherit;
  }

  .menu {
    margin: 5vh auto;
    flex-direction: row;
    height: inherit;
    max-width: 680px;

    &__link {
      padding: 8px 16px;
      display: inline;
      border-bottom: $gray 3px solid;
      transition: border-color 0.2s;

      &:hover {
        border-bottom: $green 3px solid;
      }
    }
  }

  .hamburger {
    display: none;
  }
}
</style>
