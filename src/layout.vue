<template>
  <div :class="layoutClass"
      class="layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      layoutClass:{
        hasSider:false
      }
    }
  },
  mounted() {
    console.log(this.$options);
    this.$children.forEach((vm)=>{
      if(vm.$options.name==='t-sider'){
        this.layoutClass.hasSider=true
      }
    })
    console.log(this.layoutClass);
  }
}
</script>

<style lang="scss" scoped>
.layout{
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider{
    flex-direction: row;
  }
}
</style>