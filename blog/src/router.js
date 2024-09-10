// 라우터 파일
import { createWebHistory, createRouter } from "vue-router"; // 라이브러리
import ListPage from './components/ListPage'
import MainPage from './components/MainPage'
import DetailPage from './components/DetailPage'
import Comment from "./components/Comment";
import Author from "./components/Author"
import NoPage from './components/NoPage'

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/list",
    component: ListPage,
  },
  {
    path: "/detail/:id(\\d+)", //숫자만
    component: DetailPage,
    children : [
        {
            path : "author",
            component : Author,
        },
        {
            path : "comment",
            component : Comment,
        },
    ]
  },
  {
    path: "/:nopage(.*)", // 404는 마지막에
    component: NoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 