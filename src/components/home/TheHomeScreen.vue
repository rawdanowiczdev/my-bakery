<template>
  <div class="container">
    <div class="background"></div>

    <h1 class="title">My Bakery</h1>

    <section class="informations">
      <p>
        <strong>My Bakery</strong> is a set of visual tools for controlling
        BakeryAPI. It utilizes all of the features that API provides, there's
        nothing you can't do here. Read
        <a
          class="link"
          href="https://github.com/rawdanowiczdev/bakery-api"
          rel="noopener"
          target="_blank"
          >Docs</a
        >
        to learn how to use it in details.
      </p>
    </section>
    <hr />
    <Icons />
  </div>
</template>

<script>
import Icons from "./TheIcons.vue";

export default {
  components: {
    Icons,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colors";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 5vh auto;
  font-size: 40px;
}

.background {
  height: 30vh;
  max-height: 200px;
  width: 100vw;
  max-width: 680px;
  background-image: url(../../assets/breads.png);
  background-position: center;
  background-size: cover;
}

.informations {
  margin: 10px;
  max-width: 680px;
  text-align: justify;

  .link {
    font-weight: 700;
    color: $green;
  }
}

hr {
  margin: 20px 0;
  width: calc(100% - 10px);
  max-width: 680px;
}
</style>
