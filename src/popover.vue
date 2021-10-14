<template>
  <div class="popover"
       ref="popover"
       @click="onClick">
    <div ref="contentWrapper"
         class="content-wrapper"
         v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper"
          style="display: inline-block;">
          <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {visible: false}
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
    },
    onClickDocument(e) {
      if (!(this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)))) {
        if (!(this.$refs.contentWrapper &&
            this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
          this.close()
        }
      }
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  max-width: 20em;
  word-break: break-all;
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  transform: translateY(-100%);
  margin-top: -10px;

  &::before, &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    top: 100%;
    left: 10px;
  }

  &::before {
    border-top-color: black;
  }

  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>