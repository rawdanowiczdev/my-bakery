<template>
  <base-section>
    <template #title>
      <h3>{{ item.name }}</h3>
    </template>

    <template #button>
      <base-button
        mode="yellow"
        :form="operation === 'patch' ? 'item-form' : ''"
        type="submit"
        @click="onPatch"
        >PATCH {{ type }}</base-button
      >
      <base-button
        mode="red"
        :form="operation === 'delete' ? 'item-form' : ''"
        type="submit"
        @click="onDelete"
        >DELETE {{ type }}</base-button
      >
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
  emits: ["patch", "delete"],
  data() {
    return {
      type: null,
      operation: null,
    };
  },
  methods: {
    onPatch() {
      this.$emit("patch");
      this.operation = "patch";
    },
    onDelete() {
      this.$emit("delete");
      this.operation = "delete";
    },
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
