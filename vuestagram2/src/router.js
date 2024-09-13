import { createWebHistory, createRouter } from "vue-router";
import MainPage from './pages/MainPage.vue'

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path : "/:nonePage(.*)",
    component : <div>404</div>
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 