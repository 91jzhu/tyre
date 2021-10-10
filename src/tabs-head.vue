<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject:['eventBus'],
  created(){
    this.eventBus.$on('update:selected',(item,that)=>{
      console.log(item);
      console.log(that);
      // console.log(that.$el.getBoundingClientRect())
    })
  }
}
</script>

<style lang="scss" scoped>
$tab-height:40px;
$blue:cornflowerblue;
.tabs-head{
  border:1px solid red;
  display: flex;
  height:$tab-height;
  position: relative;
  .line{
    position: absolute;
    bottom:0;
    width:100px;
    border-bottom: 2px solid $blue;
  }
  .actions-wrapper{
    margin-left: auto;
  }
}
</style>