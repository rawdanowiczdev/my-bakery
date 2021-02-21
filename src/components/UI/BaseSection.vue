<template>
  <div class="container">
    <slot name="decorator"></slot>

    <header class="title">
      <slot name="title"></slot>
    </header>

    <slot name="button"></slot>

    <section class="section">
      <slot name="section"></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/colors";

.container {
  margin: 0 auto;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  margin: 3vh auto;
}

.section {
  margin: 10px;
  max-width: 680px;
  text-align: justify;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p,
  ul {
    margin: 10px auto;
  }

  img {
    margin: 10px auto;
    width: 95vw;
    max-width: 320px;
    box-shadow: 0 0 6px 0px $gray;
  }

  li {
    display: inline;

    &::after {
      content: ", ";
    }
  }
}
</style>
