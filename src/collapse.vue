<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props:{
    single:{
      type:[Boolean,String],
      default:false,
      validator(val){
        return ['true','false',true,false].indexOf(val)>=0
      }
    }
  },
  data(){
    return{
      eventBus:new Vue()
    }
  },
  provide(){
    if(this.single){
      return{
        eventBus:this.eventBus
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$grey:#ddd;
$border-radius:4px;
.collapse{
  border:1px solid $grey;
  border-radius:$border-radius;
}
</style>