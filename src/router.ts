import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/contact",
      name: "contact",
      component: () => import("./pages/Contact.vue"),
    },
  ] as Array<RouteRecordRaw>,
});

router.beforeEach(async (_to, _from, next) => {
  next();
});

export default router;
