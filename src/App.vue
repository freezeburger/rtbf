<template>
  <div id="app">
    <view-home></view-home>
  </div>
</template>

<script>
import ViewHome from "./views/ViewHome";

export default {
  name: "App",
  methods: {
    eventHandler(evt) {
      console.warn(evt);
    }
  },
  components: {
    ViewHome
  }
};
</script>


