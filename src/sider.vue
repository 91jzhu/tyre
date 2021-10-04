<template>
  <transition name="fade">
    <div class="sider" v-if="seen">
      <slot></slot>
      <button @click="seen=false"
              class="close">close
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      seen: true
    }
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to {
  margin-left: -200px;
}
.sider {
  position: relative;

  > button {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 8px;
  }
}
</style>