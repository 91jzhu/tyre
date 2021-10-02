<template>
  <div :class="colClass"
       :style="colStyle"
       class="col">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data(){
    return{
      gutter: 0,

    }
  },
  computed:{
    colClass(){
      return [
          this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`
      ]
    },
    colStyle(){
      return{
        paddingLeft:this.gutter/2+'px',
        paddingRight:this.gutter/2+'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
}

$class: col-;
@for $n from 1 through 24 {
  .#{$class}#{$n} {
    width: ($n/24)*100%
  }
}

$class: offset-;
@for $n from 1 through 24 {
  .#{$class}#{$n} {
    margin-left: ($n/24)*100%
  }
}
</style>