<template>
  <div @click="xxx"
       :class="{active:active}"
       class="tabs-item">
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
    disabled: {
      type: [Boolean, String],
      default: false,
      validator(val) {
        return ['true', 'false', true, false].indexOf(val) >= 0
      }
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
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
.tabs-item {
  border:1px solid blue;
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background: lightgreen;
  }
}
</style>