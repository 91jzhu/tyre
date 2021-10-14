<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    },
    selected: {
      type: [String, Boolean],
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
  methods:{
    checkChildren(){
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn("tabs 中应为 tabs-head 和 tabs-body")
      }
    },
    selectTab(){
      this.$children.forEach((vm) => {
        if (vm.$options.name === "t-tabs-head") {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === "t-tabs-item" && childVm.name === this.selected) {
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