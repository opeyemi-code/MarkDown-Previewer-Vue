
import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../components/views/HomeView.vue";
// import SavedFilesView from "../components/views/SavedFiles.vue"
import SavedFilesView from "../components/views/SavedFilesView.vue"
import AboutView from "../components/views/AboutView.vue";
import ErrorPageView from "../components/views/ErrorPageView.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/saved-files", component: SavedFilesView },
  { path: "/about", component: AboutView },
  { path: "/*", component: ErrorPageView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
