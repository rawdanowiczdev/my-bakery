<template>
  <ItemForm
    v-if="showForm"
    formID="bread-patch-form"
    operation="patch"
    :patchItem="bread"
    patchCollecion="Breads"
    @update="getBread"
  />
  <base-details
    v-if="bread"
    :item="bread"
    form="bread-patch-form"
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
      bread: null,
      showForm: false,
    };
  },
  methods: {
    getBread() {
      this.showForm = false;

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
  },
  created() {
    this.getBread();
  },
};
</script>
