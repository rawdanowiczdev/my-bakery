<template>
  <Navigation />
  <routerView />
</template>

<script>
import Navigation from "@/components/nav/TheNavigation.vue";

export default {
  components: { Navigation },
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
}

body {
  background-color: lighten($light, 10%);
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
