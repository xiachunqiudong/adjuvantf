import Vue from 'vue'
import Router from 'vue-router'
import Search from "../components/Search";
import Index from "../components/Index"
import Browser from "../components/Browser";
import Contact from "../components/Contact";
import Analysis from "../components/Analysis";

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/browser',
    component: Browser
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/ana',
    component: Analysis
  }
]

const router = new Router({
  routes
})

export default router
