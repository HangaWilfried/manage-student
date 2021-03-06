import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ()=>import("../views/Login.vue")
    },
    {
      path: "/dashboard",
      component: ()=>import("../views/Dashboard.vue")
    }
  ],
});

export default router;
