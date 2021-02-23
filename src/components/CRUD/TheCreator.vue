<template>
  <base-section>
    <template #title>
      <h2>Add new object</h2>
    </template>

    <template #button>
      <base-button mode="green" type="submit" form="item-form"
        >POST object</base-button
      >
    </template>

    <template #section>
      <ItemForm operation="post" />
    </template>
  </base-section>
</template>

<script>
import ItemForm from "./ItemForm.vue";

export default {
  components: { ItemForm },
};
</script>
