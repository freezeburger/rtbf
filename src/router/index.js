import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/ViewHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/archivist',
    name: 'Archivist',
    component: () =>
      import(/* webpackChunkName: "archivist" */ '../views/ViewArchivist.vue'),
    beforeEnter: (to, from, next) => {
      console.log(to, from, next)
      next(true)
    },
  },
  {
    path: '/timestamper',
    name: 'TimeStamper',
    component: () =>
      import(
        /* webpackChunkName: "timestamper" */ '../views/ViewTimeStamper.vue'
      ),
  },
  {
    path: '/team',
    name: 'Team',
    component: () =>
      import(/* webpackChunkName: "team" */ '../views/ViewTeam.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
