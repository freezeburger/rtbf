<template>
  <div>
    <base-header>
      <template #nav>
        <base-nav></base-nav>
      </template>
    </base-header>
    <base-main 
      :mainTitle="title" 
      :display="display" 
      :scrollable="scrollable">
      <slot></slot>
    </base-main>
    <base-footer>
      <slot name="footer"></slot>
    </base-footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "RTBF"
    },
    scrollable:Boolean,
    display:String
  }
};
</script>

<style>
</style>