<template>
  <button class="t-button">
    <t-icon v-if="icon" :name="icon" :class="{[`icon-${iconPosition}`]:true}"></t-icon>
    <t-icon name="loading" class="loading"></t-icon>
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
@keyframes spin {
  0%{}
  100%{transform: rotate(360deg)}
}
.loading{
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

  > .icon-right {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
  }

  > .icon-left {
      order: -1;
      margin-right: .1em;
      margin-left: 0;
  }
}
</style>