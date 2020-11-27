import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails.vue'),
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () => import(/* webpackChunkName: "ExperienceDetails" */ '../views/ExperienceDetails.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exists) {
        next()
      } else {
        next({name: 'notFound'})
      }
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'vue-link-active',
  routes
});

export default router;
