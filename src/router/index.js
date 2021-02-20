import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "@/components/home/TheHomeScreen.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: HomeScreen }],
});

export default router;
