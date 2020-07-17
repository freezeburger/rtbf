<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
    <ul class="navbar-nav" v-if="routes">
      <li class="nav-item" v-for="route in routes" :key="route.text">
        <router-link
          class="nav-link"
          v-bind:class="{ active: route.link == currentRoute.path}"
          style="height:50px"
          :to="route.link"
        >{{route.text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BaseNav",
  props: {
    /* routes: {
      validator: function(value) {
        return value.every(route => route.text && route.link);
      }
    } */
  },
  computed: {
    currentRoute() {
      //console.log(this.$router.currentRoute);
      return this.$router.currentRoute;
    },
    routes() {
      const routes = this.$router.options.routes.map(route => ({
        link: route.path,
        text: route.name
      }));
      return routes;
    }
  },
  created() {
    /*  this.$router.options.routes.push({
    path: '/invited',
    name: 'Invited',
    component: ''
  }) */
    // console.table(this.$router.options.routes);
  }
};
</script>

<style>