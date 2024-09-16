import { createWebHistory, createRouter } from "vue-router";
import MainPage from './pages/MainPage.vue';
import NewPostingPage from './pages/NewPostingPage.vue';
import FollowerPage from './pages/FollowerPage.vue';

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path : "/newposting",
    component : NewPostingPage,
  },
  {
    path : "/follower",
    component : FollowerPage,
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