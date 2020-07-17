<template>
  <div class="card">
    <h3 class="title" v-if="title">{{title}}</h3>
    <div class="container">
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  components: {
  },

  data:function(){
      return {
      }
  },

  props: {
    title: String
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 15px; /* 15px rounded corners */
  padding: 12px;
}
.maincard {
  box-shadow: 0 8px 20px 0 rgba(0,0,0,0.92);
  transition: 0.3s;
  border-radius: 20px;
  margin: 8px;
  padding: 12px;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}
</style>
