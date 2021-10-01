<template>
  <svg class="t-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script>
import "./svg.js"
export default  {
  name:"t-icon",
  props:['name']
}
</script>

<style lang="scss" scoped>
.t-icon {
  width: 1em; height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>