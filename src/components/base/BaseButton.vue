<template>
  <div>
    <button :class="[classCSS, `btn${outline ? '-outline' : ''}-${variant}`, `btn-${getSize}`]">
      <i v-if="iconPosition === 'left' || iconPosition ==='top'" class="material-icons m-1">{{ icon }}</i>
      <slot />
      <i v-if="iconPosition === 'right' || iconPosition ==='bottom'" class="material-icons m-1">{{ icon }}</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      validator(v) {
        const acceptables = ['success', 'danger', 'secondary', 'warning', 'primary', 'info', 'light', 'dark' ]
        const valid = acceptables.includes(v)
        !valid && console.error('BaseButton PROPS:variant please use :', acceptables)
        return valid
      },
      default: 'secondary'
    },
    size: {
      validator(v) {
        const acceptables = ['small', 'large', 'medium'];
        const valid = acceptables.includes(v)
        !valid && console.error('BaseButton PROPS:SIZE please use :', acceptables)
        return valid;
      },
      type: String,
      default: 'medium'
    },
    outline: {
      type: Boolean,
      default : false
    },
    pill: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      validator(v) {
        const acceptables = ['top', 'left', 'bottom', 'right'];
        const valid = acceptables.includes(v)
        !valid && console.error('BaseButton PROPS:SIZE please use :', acceptables)
        return valid;
      },
      default: 'left'
    }
  },
  computed: {
    classCSS() {
      return {
        'btn m-1': true,
        'rounded-pill': this.pill,
        'rounded-0': this.square,
        'active': this.active,
        'd-flex align-items-center justify-content-center' : true,
        'flex-column': this.iconPosition === 'top' || this.iconPosition === 'bottom'
      }
    },
    getSize() {
      let value 
      switch(this.size) {
      case 'small' : value = 'sm'; break
      case 'medium' : value =  'md'; break; 
      case 'large' : value = 'lg' ; break;
      default: value = 'lg' ; break; 
      }
      return value 
    }
    
  }
}
</script>

<style>

</style>