<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn("tabs 中应为 tabs-head 和 tabs-body")
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        // console.log(vm.$options._componentTag);
        if (vm.$options._componentTag === "t-tabs-head") {
          vm.$children.forEach((childVm) => {
            if (childVm.$options._componentTag === "t-tabs-item" && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  },
  mounted() {
    this.checkChildren()
    this.selectTab()
  }
}
</script>

<style lang="scss" scoped>
.tabs {

}
</style>