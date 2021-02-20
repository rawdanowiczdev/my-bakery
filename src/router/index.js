import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "@/components/home/HomeScreen.vue";
import BreadsCollection from "@/components/breads/BreadsCollection.vue";
import RollsCollection from "@/components/rolls/RollsCollection.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeScreen },
    { path: "/breads", component: BreadsCollection },
    { path: "/rolls", component: RollsCollection },
  ],
});

export default router;
