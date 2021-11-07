<template>
  <div class="toastWrapper"
       :class="toastPosition">
    <div class="_toast" ref="toast">
      <div class="message">
        <div v-if="enabledHtml"
             v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <span class="close"
            @click="onClickClose"
            v-if="closeButton">
        <span ref="line" class="line" v-if="closeButton"></span>{{ closeButton.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: [Boolean,Number],
      required:false,
      default: true,
      validator(val) {
        return typeof val === 'boolean'|| typeof val === 'number';
      }
    },
    autoClassDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default:undefined
    },
    enabledHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'middle', 'bottom'].indexOf(val) >= 0
      }
    }
  },
  mounted() {
    this.updateStyles()
    this.exeautoClose()
  },
  computed: {
    toastPosition() {
      return `position-${this.position}`
    }
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        if(this.$refs.line){
          this.$refs.line.style.height =
              `${this.$refs.toast.getBoundingClientRect().height}px`
        }
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
      this.$emit('close')
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
$animation-duration:300ms;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform:translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform:translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toastWrapper{
  position: fixed;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;
    ._toast{
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    ._toast{
      animation: fade-in $animation-duration;
    }
  }

  &.position-bottom {

    bottom: 0;
    ._toast{
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
._toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  background: $toast-bg;
  border-radius: 4px;
  color: white;
  padding: 0 16px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  line-height: 1.8;
  display: flex;
  align-items: center;
  border: 1px solid white;

  .message {
    padding: 8px 0;
  }

  .close {
    cursor: pointer;
    flex-shrink: 0;
    padding-left: 16px;
    display: flex;
    align-items: center;
  }

  .line {
    display: block;
    height: 100%;
    border-left: 1px solid #666;
    margin-right: 16px;
  }
}
</style>