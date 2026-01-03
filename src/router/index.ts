import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SavedFilesView from "../views/SavedFilesView.vue";
import AboutView from "../views/AboutView.vue";
import ErrorPageView from "../views/ErrorPageView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: { title: "MarkdownPro | Home" },
  },
  {
    path: "/saved-files",
    component: SavedFilesView,
    meta: { title: "MarkdownPro | Saved Files" },
  },
  {
    path: "/about",
    component: AboutView,
    meta: { title: "MarkdownPro | About" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPageView,
    meta: { title: "MarkdownPro | Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ REGISTER THE HOOK ON ROUTER
router.afterEach((to) => {
  document.title = to.meta.title || "MarkdownPro";
});

export default router;
