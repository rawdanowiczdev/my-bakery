<template>
  <form
    id="item-form"
    class="section__form"
    ref="form"
    @submit.prevent="submitForm"
  >
    <div v-if="operation !== 'delete'">
      <div class="section__form-element" v-if="operation === 'post'">
        <label for="collection">Collection</label>
        <select
          class="section__form-input"
          id="collection"
          v-model="typeSelect"
        >
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
          placeholder="Separated by ,"
          autocomplete="off"
          v-model="grains"
          @input="grainsTouched = true"
        />
      </div>
    </div>

    <div class="section__form-element">
      <label for="token">Token</label>
      <input
        class="section__form-input"
        id="token"
        type="text"
        autocomplete="off"
        ref="token"
        @focus="tokenTouched = true"
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
  props: ["operation", "reqItem", "reqCollection"],
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
      tokenTouched: false,
    };
  },
  emits: ["update"],
  computed: {
    collection() {
      if (this.reqCollection === "Breads" || this.typeSelect === "Breads") {
        return "Breads";
      } else if (
        this.reqCollection === "Rolls" ||
        this.typeSelect === "Rolls"
      ) {
        return "Rolls";
      } else {
        return null;
      }
    },
    uri() {
      if (this.collection === "Breads") {
        if (this.operation === "patch" || this.operation === "delete") {
          return `https://rawdanowiczdev.pl/bakery-api/breads/${this.reqItem._id}`;
        }
        return "https://rawdanowiczdev.pl/bakery-api/breads/";
      } else {
        if (this.operation === "patch" || this.operation === "delete") {
          return `https://rawdanowiczdev.pl/bakery-api/rolls/${this.reqItem._id}`;
        }
        return "https://rawdanowiczdev.pl/bakery-api/rolls/";
      }
    },
  },
  created() {
    if (this.operation === "patch") {
      this.name = this.reqItem.name;
      this.description = this.reqItem.description;
      this.imageURL = this.reqItem.imageURL;
      this.grains = this.reqItem.grains;
    }
  },
  methods: {
    submitForm() {
      this.success = null;
      this.errors.length = 0;

      const token = this.$refs.token.value;
      const item = {
        name: this.name,
        description: this.description,
        imageURL: this.imageURL,
      };

      if (this.operation !== "delete") {
        if (!this.collection && this.operation === "post") {
          this.errors.push("Please choose collection.");
        }

        if (item.name.length < 3 || item.name.length > 30) {
          this.errors.push("Name should contain between 3 and 30 characters.");
        }

        if (item.description.length < 5 || item.description.length > 500) {
          this.errors.push(
            "Description should contain between 5 and 500 characters."
          );
        }

        if (
          !item.imageURL.includes("https://") ||
          !item.imageURL.includes(".")
        ) {
          this.errors.push("Image should be valid https URL.");
        }

        if (this.collection === "Breads") {
          item.grains = this.grains;
          if (
            (this.grains !== "" && this.operation === "post") ||
            (this.grains !== "" &&
              this.operation === "patch" &&
              this.grainsTouched)
          ) {
            item.grains = this.grains.split(",");
          }
          if (item.grains.length < 1 || item.grains.length > 10) {
            this.errors.push(
              "You should add at least 1 and maximum 10 grains."
            );
          }
        }
      }

      if (token.length < 270 && this.tokenTouched) {
        this.errors.push("Please enter valid token.");
      }

      if (this.errors.length === 0 && this.tokenTouched) {
        fetch(this.uri, {
          method: this.operation.toUpperCase(),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: this.operation === "delete" ? null : JSON.stringify(item),
        })
          .then((response) => {
            if (response.ok) {
              this.$emit("update");
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
            this.success = `Message: ${data.message} ${JSON.stringify(
              data.item
            )}`;
          })
          .catch((err) => {
            this.errors.push(err);
          });
      }
    },
  },
};
</script>
