<template>
  <div>
      BaseDemoSlot
      <slot name="first"></slot>
      <hr>
      <slot></slot>
      <hr>
      <slot name="last"></slot>
  </div>
</template>

<script>
export default {
    name:'BaseDemoSlot'
}
</script>

<style>

</style>