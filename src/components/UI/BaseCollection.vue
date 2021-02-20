<template>
  <div class="collection"><slot></slot></div>
</template>

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
