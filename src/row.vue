<template>
  <div :style="rowStyle"
       :class="rowClass"
       class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [Number, String]
    },
    align:{
      type:String,
      validator(val){
        return ['left','right','center'].indexOf(val)>=0
      }
    }
  },
  computed:{
    rowClass(){
      return [this.align && `align-${this.align}`]
    },
    rowStyle(){
      return{
        marginLeft:-this.gutter/2+'px',
        marginRight:-this.gutter/2+'px'
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      vm.gutter=this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-center{
    justify-content: center;
  }
  &.align-right{
    justify-content: flex-end;
  }
}
</style>