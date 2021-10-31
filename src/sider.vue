<template>
  <transition name="fade">
    <div class="sider">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name:'t-sider',
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.sider {
  position: relative;
}
</style>