<template>
  <base-details v-if="bread" :item="bread"></base-details>
  <div class="loading--container" v-else>
    <loading-spinner></loading-spinner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      bread: null,
    };
  },
  created() {
    fetch(`https://rawdanowiczdev.pl/bakery-api/breads/${this.id}`)
      .then((response) => {
        if (!response.ok) {
          this.$router.push("../");
        }
        return response.json();
      })
      .then((data) => {
        this.bread = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
