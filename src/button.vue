<template>
  <button class="t-button" :class="{[`icon-${iconPosition}`]:true}">
    <t-icon v-if="icon" :name="icon"></t-icon>
    <slot></slot>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  components: {Icon},
  props: {
    icon: {},
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

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }

  &.icon-left {
    > .icon {
      order: -1;
      margin-right: .1em;
      margin-left: 0;
    }
  }
}
</style>