<template>
  <button class="t-button"
          :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')">
    <t-icon v-if="icon && !loading"
            :name="icon"
            class="icon"></t-icon>
    <t-icon v-if="loading"
            name="loading"
            class="loading icon"></t-icon>
    <slot class="content"></slot>
  </button>
</template>

<script>
import Icon from "./icon.vue";

export default {
  components: {'t-icon':Icon},
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size:14px;
$button-height:32px;
$button-bg:white;
$button-active-bg:#eee;
$border-radius:4px;
$color:#333;
$border-color:#999;
$border-color-hover:#666;
@keyframes spin {
  0% {
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: spin 1s infinite linear;
}

.t-button {
  vertical-align: middle;
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  &.icon-left {
    > .content {
      order: 2
    }

    > .icon {
      order: -1;
      margin-right: .1em;
      margin-left: 0;
    }
  }

  &.icon-right {
    > .content {
      order: 1
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
</style>