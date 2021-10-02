<template>
  <div :class="[`col-${span}`]"
      class="col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    span:{
      type:[Number,String]
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  background: lightgreen;
  border: 1px solid black;
}

$class:col-;
@for $n from 1 through 24{
  .#{$class}#{$n}{
    width:($n/24)*100%
  }
}

</style>