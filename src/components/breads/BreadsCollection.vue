<template>
  <base-section>
    <template #title>
      <h2>Breads collection</h2>
    </template>

    <template #button>
      <base-button mode="green" @click="getBreads">GET breads</base-button>
    </template>

    <template #section>
      <base-collection :loading="loading">
        <div v-for="bread in breads" :key="bread">
          <h4>{{ bread.name }}</h4>
          <img
            class="collection__image"
            :src="bread.imageURL"
            :alt="bread.name"
            @click="showDetails(bread._id)"
          />
        </div>
      </base-collection>
    </template>
  </base-section>
</template>

<script>
export default {
  data() {
    return {
      breads: [],
      loading: false,
    };
  },
  methods: {
    getBreads() {
      this.breads = [];
      this.loading = true;

      fetch("https://rawdanowiczdev.pl/bakery-api/breads/")
        .then((response) => response.json())
        .then((data) => {
          this.loading = false;
          this.breads = data;
        })
        .catch((err) => console.log(err));
    },
    showDetails(id) {
      this.$router.push(`/breads/${id}`);
    },
  },
};
</script>
