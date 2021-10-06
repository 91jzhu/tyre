<template>
  <div class="toast" ref="toast">
    <div class="message">
      <div v-if="enabledHtml"
           v-html="$slots.default[0]"></div>
      <slot v-else></slot>
    </div>
    <div ref="line"
         class="line"></div>
    <span class="close"
          @click="onClickClose"
          v-if="closeButton">{{ closeButton.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoClassDelay: {
      type: Number,
      default: 30
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        }
      }
    },
    enabledHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateStyles()
    this.exeautoClose()
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`

      })
    },
    exeautoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClassDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  background: $toast-bg;
  border-radius: 4px;
  color: white;
  padding: 0 16px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border: 1px solid white;
  .message{
    padding:8px 0;
  }

  .close {
    flex-shrink: 0;
    padding-left: 16px;
    display: flex;
    align-items: center;
  }

  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>