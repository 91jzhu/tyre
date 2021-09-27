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
import Icon from "./icon";

export default {
  components: {Icon},
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
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);

  &:hover {
    border-color: var(--border-coloc-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  &.icon-left {
    > .content{
      order:2
    }
    > .t-icon {
      order: -1;
      margin-right: .1em;
      margin-left: 0;
    }
  }

  &.icon-right {
    > .content{
      order:1
    }
    > .t-icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
</style>