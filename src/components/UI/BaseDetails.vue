<template>
  <base-section>
    <template #title>
      <h3>{{ item.name }}</h3>
    </template>

    <template #button>
      <base-button mode="yellow">PATCH {{ collection }}</base-button>
      <base-button mode="red">DELETE {{ collection }}</base-button>
    </template>

    <template #section>
      <img :src="item.imageURL" :alt="item.name" />
      <p>{{ item.description }}</p>
      <div v-if="item.grains">
        <h4>Grains:</h4>
        <ul>
          <li v-for="grain in item.grains" :key="grain">{{ grain }}</li>
        </ul>
      </div>
    </template>
  </base-section>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      collection: null,
    };
  },
  created() {
    this.collection = this.$route.path.split("/")[1];
  },
};
</script>
