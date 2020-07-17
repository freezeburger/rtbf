<template>
  <div :class="classCSS">
      BaseDemoClass
  </div>
</template>

<script>
export default {
    name:'BaseDemoClass',
    computed:{
      classCSS(){
        // return 'bg-dark'
        // return ['bg-dark','text-white']
        return {
          'text-white':true,
          'bg-success': this.color == 'green',
          'bg-danger': this.color == 'red',
        }
      }
    },
    props:{
      color:{
        validator(v){
          return ['red','green'].includes(v);
        },
        required:true
      }
    }
}
</script>

<style>

</style>