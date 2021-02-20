<template>
  <base-section>
    <template #title>
      <h2>Rolls collection</h2>
    </template>

    <template #button>
      <base-button mode="green" @click="getRolls">GET rolls</base-button>
    </template>

    <template #section>
      <base-collection :loading="loading">
        <div v-for="roll in rolls" :key="roll">
          <h4>{{ roll.name }}</h4>
          <img :src="roll.imageURL" :alt="roll.name" />
        </div>
      </base-collection>
    </template>
  </base-section>
</template>

<script>
export default {
  data() {
    return {
      rolls: [],
      loading: false,
    };
  },
  methods: {
    getRolls() {
      this.rolls = [];
      this.loading = true;

      fetch("https://rawdanowiczdev.pl/bakery-api/rolls/")
        .then((response) => response.json())
        .then((data) => {
          this.loading = false;
          this.rolls = data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
