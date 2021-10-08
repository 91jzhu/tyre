<template>
  <div @click="xxx"
       class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
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
    this.eventBus.$on('update:selected', (name)=> {
      console.log(name);
    })
  }
}
</script>

<style lang="scss" scoped>

</style>