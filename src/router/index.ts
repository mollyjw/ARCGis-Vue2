import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import LeadDetails from "../views/LeadDetails.vue";
import Assigned from "../views/Assigned.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { 
    path: "/unassigned/:id", 
    name: "LeadDetails", 
    component: LeadDetails 
  },
  {
    path: "/assigned",
    name: "Assigned",
    component: Assigned
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
