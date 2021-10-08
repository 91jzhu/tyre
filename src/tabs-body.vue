<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject:['eventBus'],
  created(){
    console.log('爷爷给body');
    console.log(this.eventBus);
  }
}
</script>

<style lang="scss" scoped>

</style>