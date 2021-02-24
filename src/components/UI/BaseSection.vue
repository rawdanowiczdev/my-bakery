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

<style lang="scss">
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
  justify-content: center;
  flex-wrap: wrap;

  &__text,
  &__list {
    width: 90vw;
    max-width: 680px;
    margin: 10px auto;
  }

  &__image {
    margin: 10px auto;
    width: 95vw;
    max-width: 320px;
  }

  &__item {
    display: inline;

    &::after {
      content: ", ";
    }
  }

  &__form {
    margin: auto;

    &-element {
      margin: 10px auto;
      width: 340px;
      max-width: 90vw;
      display: flex;
      flex-direction: column;

      &--check {
        display: block;
      }
    }

    &-input {
      margin: 2px 0;
      padding: 2px;
      font-size: 20px;

      &--check {
        margin: 2px 10px 2px 0;
        height: 16px;
        width: 16px;
      }
    }
  }

  &__error {
    margin: auto;
    width: 90vw;
    max-width: 480px;
    padding: 5px;
    border-radius: 2px;
    color: $red;
    background-color: rgba($red, 0.1);
  }

  &__success {
    margin: auto;
    padding: 5px;
    word-break: break-all;
    position: relative;
    border-radius: 2px;
    color: $green;
    background-color: rgba($green, 0.1);
    animation: success 0.2s;
  }

  @keyframes success {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
