<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    disabled:{
      type:Boolean,
      default:false,
      validator(val){
        return ['true','false'].indexOf(val)>=0
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>