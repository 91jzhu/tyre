<template>
  <div v-if="active"
       :class="{active:active}"
       class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  props: {
    name: [String, Number],
    required: true
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  padding: 2em;
  &.active {
  }
}
</style>