<template>
  <ItemForm
    v-if="showPatch"
    formID="bread-patch-form"
    operation="patch"
    :item="bread"
    itemType="bread"
    @update="getBread"
  />
  <base-details
    v-if="bread"
    :item="bread"
    @patch="showPatch = true"
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
      showPatch: false,
    };
  },
  methods: {
    getBread() {
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
