import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/NotFound.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/post/:id",
    name: "post",
    component: () => import(/* webpackChunkName: "post" */ "@/views/Post.vue"),
  },
  {
    path: "/add-post",
    name: "add-post",
    component: () =>
      import(/* webpackChunkName: "add-post" */ "@/views/AddPost.vue"),
  },
  {
    path: "/edit/:id",
    name: "edit-post",
    component: () =>
      import(/* webpackChunkName: "edit-post" */ "@/views/EditPost.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
