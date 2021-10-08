<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

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
      type:[String,Boolean],
      required:true
    }
  },
  data(){
    return{
      eventBus:new Vue()
    }
  },
  provide(){
    return{
      eventBus:this.eventBus
    }
  },
}
</script>

<style lang="scss" scoped>

</style>