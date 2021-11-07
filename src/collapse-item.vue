<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" ref="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    toggle() {
      if (this.isOpen) {
        this.eventBus.$emit('toClose', this.name)
      } else {
        this.eventBus.$emit('toOpen', this.name)
      }
    }
  },
  mounted() {
    this.eventBus.$on('selected',(selected)=>{
      if(selected.indexOf(this.name)>=0){
        this.open()
      }
    })
    this.eventBus.$on('Open', (name, single) => {
      if(single){
        if (name === this.name) {
          this.open()
        }else{
          this.close()
        }
      }
      if (name === this.name) {
        this.open()
      }
    })
    this.eventBus.$on('Close', (name) => {
      if (name === this.name) {
        this.close()
      }
    })
  }

}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  cursor: pointer;

  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    background: lighten($grey, 8%);
  }

  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

  > .content {
    padding: 8px;
  }
}
</style>