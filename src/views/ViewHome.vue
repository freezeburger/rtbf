<template>
  <rtbf-layout title="Home" :scrollable="true">
    <feature-login></feature-login>
    <base-text
      TextType="text"
    >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sit enim quae quisquam ad odit cumque ratione architecto ut hic.</base-text>
  </rtbf-layout>
</template>

<script>
import FeatureLogin from "../features/Login.vue";

export default {
  components: {
    FeatureLogin
  }
};
</script>

<style>
</style>