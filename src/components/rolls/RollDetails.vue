<template>
  <ItemForm
    v-if="showForm"
    :operation="request"
    :reqItem="roll"
    reqCollection="Rolls"
    @update="getRoll"
  />
  <base-details
    v-if="roll"
    :item="roll"
    @patch="patchReq"
    @delete="deleteReq"
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
      request: null,
      id: this.$route.params.id,
      roll: null,
      showForm: true,
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
    patchReq() {
      this.request = "patch";
      this.showForm = true;
    },
    deleteReq() {
      this.request = "delete";
      this.showForm = true;
    },
  },
  created() {
    this.getRoll();
  },
};
</script>
