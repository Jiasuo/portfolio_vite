// Import modules
import { createRouter, createWebHistory } from "vue-router";

// Import pages
import HomePage from "./pages/HomePage.vue"

const routes = [
  { // HomePage
    path: "/",
    component: HomePage,
    name: "HomePage"
  },
  { // Wildcard
    path: "/:pathMatch(.*)*",
    redirect: () => ({ name: "HomePage" }),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // always scroll to top on route change
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;