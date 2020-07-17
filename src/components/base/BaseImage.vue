<template>
  <img :src="source" :class="['zoom',`${size}`, `${shape}`]" :alt="title" @click="handleInput($event)" :width="width" :height="height">
</template>
<script>


export default {
  name: 'BaseImage',
  props: {
    source:{
      default:"https://images.unsplash.com/photo-1594233951124-5c5256771fc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      type: String
    },
    title:{
      type: String,
      required:true,
    },
    width:{
      type: Number,
      default: 150,
    },
    height:{
      type: Number,
      default: 150,
    },
    shape:{
      type: String,
      default: 'rounded',
      validator: (v) => {
        return ['rounded', 'rounded-circle', 'img-thumbnail'].includes(v)
      },
    },
    size:{
      type: String,
    }
  },
  methods: {
    handleInput(e){
      console.log("Une belle image : " + this.title )
      console.log("event => " + e )
      this.$emit('clickimage')
    }
  }
}
</script>

<style>
.zoom {
  padding: .0rem;
  background-color:gray;
  transition: transform .2s; /* Animation */
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

</style>