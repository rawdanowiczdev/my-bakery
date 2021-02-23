<template>
  <form
    :id="formID"
    class="section__form"
    ref="form"
    @submit.prevent="submitForm"
  >
    <div class="section__form-element" v-if="operation === 'post'">
      <label for="collection">Collection</label>
      <select class="section__form-input" id="collection" v-model="typeSelect">
        <option>Breads</option>
        <option>Rolls </option>
      </select>
    </div>

    <div class="section__form-element">
      <label for="name">Name</label>
      <input
        class="section__form-input"
        id="name"
        type="text"
        autocomplete="off"
        v-model="name"
      />
    </div>

    <div class="section__form-element">
      <label for="description">Description</label>
      <input
        class="section__form-input"
        id="description"
        type="text"
        autocomplete="off"
        v-model="description"
      />
    </div>

    <div class="section__form-element">
      <label for="image">Image URL</label>
      <input
        class="section__form-input"
        id="image"
        type="text"
        autocomplete="off"
        v-model="imageURL"
      />
    </div>

    <div class="section__form-element" v-if="collection === 'Breads'">
      <label for="grains">Grains</label>
      <input
        class="section__form-input"
        id="grains"
        type="text"
        autocomplete="off"
        v-model="grains"
        @input="grainsTouched = true"
      />
    </div>

    <div class="section__form-element">
      <label for="token">Token</label>
      <input
        class="section__form-input"
        id="token"
        type="text"
        autocomplete="off"
        ref="token"
      />
    </div>
  </form>

  <div class="section__text section__errors" v-if="errors.length > 0">
    <ul v-for="err in errors" :key="err">
      <li class="section__error">{{ err }}</li>
    </ul>
  </div>

  <p class="section__text section__success" v-if="success">{{ success }}</p>
</template>

<script>
export default {
  props: ["formID", "operation", "item", "itemType"],
  data() {
    return {
      errors: [],
      success: null,
      typeSelect: null,
      name: "",
      description: "",
      imageURL: "",
      grains: "",
      grainsTouched: false,
    };
  },
  emits: ["update"],
  computed: {
    collection() {
      if (this.itemType === "bread" || this.typeSelect === "Breads") {
        return "Breads";
      } else if (this.itemType === "rolls" || this.typeSelect === "Rolls") {
        return "Rolls";
      } else {
        return null;
      }
    },
    uri() {
      if (this.collection === "Breads") {
        if (this.operation === "patch") {
          return `https://rawdanowiczdev.pl/bakery-api/breads/${this.item._id}`;
        }
        return "https://rawdanowiczdev.pl/bakery-api/breads/";
      } else {
        if (this.operation === "patch") {
          return `https://rawdanowiczdev.pl/bakery-api/rolls/${this.item._id}`;
        }
        return "https://rawdanowiczdev.pl/bakery-api/rolls/";
      }
    },
  },
  created() {
    if (this.operation === "patch") {
      const item = JSON.parse(JSON.stringify(this.item));
      this.name = item.name;
      this.description = item.description;
      this.imageURL = item.imageURL;
      this.grains = item.grains;
    }
  },
  methods: {
    submitForm() {
      this.success = null;
      this.errors.length = 0;

      const newItem = {
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
      };
      const token = this.$refs.token.value;

      if (!this.collection && this.operation === "post") {
        this.errors.push("Please choose collection.");
      }
      if (newItem.name.length < 3 || newItem.name.length > 30) {
        this.errors.push("Name should contain between 3 and 30 characters.");
      }
      if (newItem.description.length < 5 || newItem.description.length > 500) {
        this.errors.push(
          "Description should contain between 5 and 500 characters."
        );
      }
      if (!newItem.imageURL.includes("https://")) {
        this.errors.push("Image should be valid https URL.");
      }
      if (this.collection === "Breads") {
        newItem.grains = this.grains;
        if (
          (this.grains !== "" && this.operation === "post") ||
          (this.grains !== "" &&
            this.operation === "patch" &&
            this.grainsTouched)
        ) {
          newItem.grains = this.grains.split(",");
        }
        if (newItem.grains.length < 1 || newItem.grains.length > 10) {
          this.errors.push("You should add at least 1 and maximum 10 grains.");
        }
      }
      if (token.length < 270) {
        this.errors.push("Please enter valid token.");
      }

      if (this.errors.length === 0) {
        fetch(this.uri, {
          method: this.operation.toUpperCase(),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        })
          .then((response) => {
            if (response.ok) {
              if (this.operation === "post") {
                this.$refs.form.reset();
                this.typeSelect = null;
                this.name = "";
                this.description = "";
                this.imageURL = "";
                this.grains = "";
              }
              return response.json();
            }
            this.errors.push(`${response.status} ${response.statusText}`);
          })
          .then((data) => {
            this.success = data;
            this.$emit("update");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
