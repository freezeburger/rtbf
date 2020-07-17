<template>
  <div id="app">
    <div class="row">
      <input v-bind:style="cssClass('center')" :value="todayDate" type="text" class="form-control-sm ml-3 mt-3 p4" placeholder="Date">
      <input v-bind:style="cssClass('center')" :value="todayHours" type="text" class="form-control-sm ml-3 mt-3 p4" placeholder="Heure">
      <button type="submit" class="btn btn-sm btn-primary ml-3 mt-3">OK</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  props:{
    currentDate: {
        type: Date,
        default: function () {
            return new Date
        },
    },
  },
  computed:{
      todayDate: function () {
        return this.currentDate.getDate() + '-' + this.currentDate.getMonth() + '-' + this.currentDate.getFullYear();
      },
      todayHours: function () {
        return this.currentDate.getHours() + 'H' + this.currentDate.getMinutes() + 's' + this.currentDate.getSeconds();
      }
  },
  methods:{
    cssClass(property){
        return {
            'text-align': property
        }
  }
  }
}
</script>

<style>
#app {
   color: red;

}
</style>