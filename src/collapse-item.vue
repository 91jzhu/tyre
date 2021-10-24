<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    }
  },
  methods: {
    close() {
      this.isOpen = false
    },
    open(){
      this.isOpen=true
    },
    toggle() {
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
        this.eventBus && this.eventBus.$emit('update:selected', this)
      }
    }
  },
  inject: ['eventBus'],
  mounted() {
      this.eventBus.$on('update:show', (num) => {
        console.log(123);
        if (num === this.name) {
          this.open()
        }
      })



    // if (this.eventBus) {
    //   this.eventBus.$on('update:selected', (e) => {
    //     console.log(e);
    //     if (e !== this) {
    //       this.close()
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
  }

  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    margin-bottom: -1px;

    > .title {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

  > .content {
    padding: 8px;
  }
}
</style>