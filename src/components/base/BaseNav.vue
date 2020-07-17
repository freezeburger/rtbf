<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          
          <li class="nav-item" v-for=" route in routes" :key="route.text">
            <a class="nav-link" v-bind:class="{ active: route.text==currentRoute.text}" style="height:50px" :href="route.link">{{route.text}}</a>
          </li>
           
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: "BaseNav",
  props: {
    currentRoute:Object,
    routes: {
      validator: function(value) {
        return value.every(route => route.text && route.link);
      }
    }
  },
  // props: ['textsNav'],
  components: {}
};


</script>

<style>