<template>
  <base-details v-if="roll" :item="roll"></base-details>
  <div class="loading--container" v-else>
    <loading-spinner></loading-spinner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      roll: null,
    };
  },
  created() {
    fetch(`https://rawdanowiczdev.pl/bakery-api/rolls/${this.id}`)
      .then((response) => {
        if (!response.ok) {
          this.$router.push("../");
        }
        return response.json();
      })
      .then((data) => {
        this.roll = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
