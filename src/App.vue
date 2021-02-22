<template>
  <TheNavigation />
  <routerView />
</template>

<script>
import TheNavigation from "@/components/nav/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,300&display=swap");
@import "./src/assets/scss/colors";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  color: $black;
  letter-spacing: 1.4px;
  line-height: 1.5;
}

body {
  background-color: lighten($light, 10%);
  overflow-y: overlay;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
