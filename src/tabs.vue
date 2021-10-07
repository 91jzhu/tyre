<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    direction:{
      type:String,
      default:'horizontal',
      validator(val){
        return ['horizontal','vertical'].indexOf(val)>=0
      }
    },
    selected:{
      type:String,
      required:true
    }
  },
  created(){
    // this.$emit('update:selected',"")
  }
}
</script>

<style lang="scss" scoped>

</style>