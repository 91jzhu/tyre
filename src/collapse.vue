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
      type:Array,
      required: false
    },
    single:{
      type:Boolean,
      default:false,
      required:false
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('selected',this.selected)
    this.eventBus.$on('toClose',(name)=>{
      this.eventBus.$emit('Close',name)
    })
    this.eventBus.$on('toOpen',(name)=>{
      this.eventBus.$emit('Open',name,this.single)
    })
  }
}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>