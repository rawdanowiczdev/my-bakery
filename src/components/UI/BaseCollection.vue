<template>
  <div class="container">
    <loading-spinner v-if="loading"></loading-spinner>
    <div class="collection">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loading"],
};
</script>

<style lang="scss" scoped>
.collection {
  margin: 20px auto;
  width: 100vw;
  max-width: 680px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 330px);
  gap: 20px;
  align-items: center;
  justify-content: center;
  justify-items: center;

  img {
    margin-top: 5px;
    width: 300px;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
