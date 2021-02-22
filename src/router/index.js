import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "@/components/home/HomeScreen.vue";
import BreadsCollection from "@/components/breads/BreadsCollection.vue";
import BreadDetails from "@/components/breads/BreadDetails.vue";
import RollsCollection from "@/components/rolls/RollsCollection.vue";
import RollDetails from "@/components/rolls/RollDetails.vue";
import TokenGenerator from "@/components/token/TokenGenerator.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeScreen },
    { path: "/breads", component: BreadsCollection },
    { path: "/breads/:id", component: BreadDetails },
    { path: "/rolls", component: RollsCollection },
    { path: "/rolls/:id", component: RollDetails },
    { path: "/token", component: TokenGenerator },
  ],
});

export default router;
