<template>
  <div :class="colClass"
       :style="colStyle"
       class="col">
    <slot></slot>
  </div>
</template>

<script>
let validator = (val) => {
  let keys = Object.keys(val)
  let valid = true
  keys.forEach((key) => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  props: {
    span: {type: [Number, String]},
    offset: {type: [Number, String]},
    ipad: {type: Object, validator,},
    narrowPc: {type: Object, validator,},
    pc: {type: Object, validator,},
    widePc: {type: Object, validator,},
  },
  data() {
    return {
      gutter: 0,
    }
  },
  methods:{
    createClasses:(obj,str="")=>{
      if(!obj){return []}
      let arr=[]
      if(obj.span){
        arr.push(`col-${str}${obj.span}`)
      }
      if(obj.offset){
        arr.push(`offset-${str}${obj.offset}`)
      }
      return arr
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      return [
        ...this.createClasses({span,offset}),
        ...this.createClasses(ipad,'ipad-'),
        ...this.createClasses(narrowPc,'narrow-pc-'),
        ...this.createClasses(pc,'pc-'),
        ...this.createClasses(widePc,'wide-pc-'),      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24)*100%
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24)*100%
    }
  }
  @media (min-width: 577px) {
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%
      }
    }

    $class: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%
      }
    }
  }

  @media (min-width: 768px) {
    $class: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%
      }
    }

    $class: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%
      }
    }
  }

  @media (min-width: 992px) {
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%
      }
    }

    $class: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%
      }
    }
  }

  @media (min-width: 1200px) {
    $class: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24)*100%
      }
    }

    $class: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n/24)*100%
      }
    }
  }
}
</style>