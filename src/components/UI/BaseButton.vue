<template>
  <button :class="mode"><slot></slot></button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colors";

button {
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 2px;
  transition: background-color 0.2s;
  cursor: pointer;

  &.green {
    background-color: rgba($green, 0.1);
    border: 2px solid $green;
    color: $green;

    &:hover {
      background-color: rgba($green, 0.3);
    }
  }

  &.yellow {
    background-color: rgba($yellow, 0.1);
    border: 2px solid $yellow;
    color: $yellow;

    &:hover {
      background-color: rgba($yellow, 0.3);
    }
  }

  &.red {
    background-color: rgba($red, 0.1);
    border: 2px solid $red;
    color: $red;

    &:hover {
      background-color: rgba($red, 0.3);
    }
  }
}
</style>
