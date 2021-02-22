<template>
  <base-section>
    <template #title>
      <h3>{{ item.name }}</h3>
    </template>

    <template #button>
      <base-button mode="yellow">PATCH {{ type }}</base-button>
      <base-button mode="red">DELETE {{ type }}</base-button>
    </template>

    <template #section>
      <img class="section__image" :src="item.imageURL" :alt="item.name" />
      <p class="section__text">{{ item.description }}</p>
      <div v-if="item.grains">
        <h4>Grains:</h4>
        <ul class="section__list">
          <li class="section__item" v-for="grain in item.grains" :key="grain">
            {{ grain }}
          </li>
        </ul>
      </div>
    </template>
  </base-section>
</template>

<script>
export default {
  props: ["item", "loading"],
  data() {
    return {
      type: null,
    };
  },
  created() {
    if (this.$route.path.split("/")[1] === "breads") {
      this.type = "bread";
    } else if (this.$route.path.split("/")[1] === "rolls") {
      this.type = "roll";
    }
  },
};
</script>
