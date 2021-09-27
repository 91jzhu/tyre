<template>
  <button class="t-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
      <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['icon', 'iconPosition']
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

  > .icon{
    margin-right: .1em;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
</style>