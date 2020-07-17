<template>
  <div>
    <slot name="message"></slot>
    <input
      v-if="type === 'checkbox' || type === 'radio'"
      v-bind:type="type"
      v-bind:checked="value"
      v-on:input="$emit('input',$event.target.checked)"
    />
    <input
      v-else
      v-bind:type="type"
      v-bind:value="value"
      v-on:input="$emit('input',$event.target.value)"
      class="form-control"
    />
    <div class="alert alert-danger"  v-if="validator!=null&&!validator(value)" >
      <slot name="invalided-message"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseInput",

  props: {
    type: {
      type: String,
      default: "text",
      validator: value => {
        return ["text", "checkbox", "radio", "date"].includes(value);
      }
    },
    value: {
      type: [String, Boolean]
    },
    validator: {
      type: Function,
      default: null
    }
  },
  data: function() {
    return {};
  },

  methods: {}
};
</script>
<style>
</style>