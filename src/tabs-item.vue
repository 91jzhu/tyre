<template>
  <div @click="onClick"
       :class="{active:active,disabled}"
       class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
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
    onClick() {
      if (this.disabled) {
        return
      }
      this.eventBus &&
      this.eventBus.$emit('update:selected', this.name, this)
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus &&
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  }
}
</script>

<style lang="scss" scoped>
$blue: cornflowerblue;
$disabled-text-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    color: $blue;
    font-weight: bold;
  }

  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>