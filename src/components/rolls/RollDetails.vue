<template>
  <ItemForm
    v-if="showForm"
    formID="roll-patch-form"
    operation="patch"
    :patchItem="roll"
    patchCollecion="Rolls"
    @update="getRoll"
  />
  <base-details
    v-if="roll"
    :item="roll"
    form="roll-patch-form"
    @patch="showForm = true"
  ></base-details>
  <div class="loading--container" v-else>
    <loading-spinner></loading-spinner>
  </div>
</template>

<script>
import ItemForm from "../CRUD/ItemForm.vue";

export default {
  components: { ItemForm },
  data() {
    return {
      id: this.$route.params.id,
      roll: null,
      showForm: false,
    };
  },
  methods: {
    getRoll() {
      this.showForm = false;

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
  },
  created() {
    this.getRoll();
  },
};
</script>
