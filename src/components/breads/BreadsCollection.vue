<template>
  <base-section>
    <template #title>
      <h2>Breads collection</h2>
    </template>

    <template #button>
      <base-button mode="green" @click="getBreads">GET breads</base-button>
    </template>

    <template #section>
      <base-collection>
        <div v-for="bread in breads" :key="bread">
          <h4>{{ bread.name }}</h4>
          <img :src="bread.imageURL" :alt="bread.name" />
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
    };
  },
  methods: {
    getBreads() {
      fetch("https://rawdanowiczdev.pl/bakery-api/breads/")
        .then((response) => response.json())
        .then((data) => (this.breads = data))
        .catch((err) => console.log(err));
    },
  },
};
</script>
