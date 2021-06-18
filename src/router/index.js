import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Slick from "../views/Slick.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/slick",
    name: "Slick",
    component: Slick,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
