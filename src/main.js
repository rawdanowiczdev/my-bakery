import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";

import BaseSection from "@/components/UI/BaseSection.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseCollection from "@/components/UI/BaseCollection.vue";
import LoadingSpinner from "@/components/UI/LoadingSpinner.vue";

const app = createApp(App);

app.use(router);

app.component("base-section", BaseSection);
app.component("base-button", BaseButton);
app.component("base-collection", BaseCollection);
app.component("loading-spinner", LoadingSpinner);

app.mount("#app");
