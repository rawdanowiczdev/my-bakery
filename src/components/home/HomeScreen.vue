<template>
  <base-section>
    <template #decorator>
      <div class="background"></div>
    </template>

    <template #title>
      <h1 class="title">My Bakery</h1>
    </template>

    <template #section>
      <p class="section__text">
        My Bakery is a set of visual tools for controlling BakeryAPI. It
        utilizes all of the features that API provides. To use POST, PATCH and
        DELETE methods first you need to get a Token. Read the
        <a
          class="link"
          href="https://github.com/rawdanowiczdev/bakery-api"
          rel="noopener"
          target="_blank"
          >Docs</a
        >
        to learn how does the API work in detail. If you're interested in this
        website's code you can check it on my
        <a
          class="link"
          href="https://github.com/rawdanowiczdev/my-bakery"
          rel="noopener"
          target="_blank"
          >GitHub</a
        >
        as well. Enjoy!
      </p>
      <hr />
      <HomeIcons />
    </template>
  </base-section>
</template>

<script>
import HomeIcons from "./HomeIcons.vue";

export default {
  components: {
    HomeIcons,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colors";

.background {
  height: 30vh;
  max-height: 200px;
  width: 100vw;
  max-width: 680px;
  background-image: url(../../assets/breads.png);
  background-position: center;
  background-size: cover;
}

.link {
  text-transform: uppercase;
  font-weight: 700;
  color: $green;
}

hr {
  margin: 20px 0;
  width: calc(100% - 10px);
  max-width: 680px;
}
</style>
