<template>
  <div>
      BaseDemoSlot
      <button @click="handler('X')">X</button>

      <select @change="handler($event.target.value)">
        <option>1</option>
        <option>2</option>
      </select>
      
  </div>
</template>

<script>
export default {
    name:'BaseDemoSlot',
    methods:{
      handler(data){
        console.log(data);
        this.$emit('userSelection', data)
      }
    }
}
</script>

<style>

</style>