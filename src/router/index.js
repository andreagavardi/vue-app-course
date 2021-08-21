import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";

const routes = [
  {
    path: "/", //url
    name: "EventList", //name
    component: EventList, //view component to render
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting serve per non caricare tutto l'app subito lato client per non avere una bad performance
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
