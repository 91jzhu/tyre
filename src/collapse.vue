<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props:{
    selected:{
      type:[String,Number],
      default:1
    },
    single:{
      type:[Boolean,String],
      default:true,
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
  mounted(){
    for(let i=0;i<this.$children.length;i++){
      if(this.$children[i].$options.propsData.name===this.selected){
        console.log('应该展开'+`${this.selected}`)
        this.eventBus.$emit('update:show',this.selected)
        return
      }
    }
  }
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