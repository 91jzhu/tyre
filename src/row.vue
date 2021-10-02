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
      default:'center',
      validator(val){
        return ['left','right','center'].includes(val)
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
      vm.gutter=this.gutter}
    )
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