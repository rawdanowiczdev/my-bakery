import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "@/components/home/HomeScreen.vue";
import BreadsCollection from "@/components/breads/BreadsCollection.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeScreen },
    { path: "/breads", component: BreadsCollection },
  ],
});

export default router;
