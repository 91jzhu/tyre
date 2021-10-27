<template>
  <div :class="{error}"
      class="wrapper">
    <input type="text"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           :readonly="readonly"
           :disabled="disabled"
           :value="content"/>
    <template v-if="error">
      <t-icon class="icon-error"
          name="error"></t-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon.vue'
export default  {
  components:{Icon},
  props: {
    content:{
      type:String
    },
    disabled:{
      type:Boolean,
      default:false
    },
    readonly:{
      type:Boolean,
      default: false
    },
    error:{
      type:String
    }
  }
}
</script>

<style lang="scss" scoped>
$height:32px;
$border-color:#999;
$border-color-hover:#666;
$border-radius:4px;
$font-size:12px;
$box-shadow-color:rgba(0,0,0,0.5);
$red:#F1453D;
.wrapper{
  align-items: center;
  font-size: $font-size;
  display: inline-flex;
  > :not(:last-child){
    margin-right: .5em;
  }
  &.error{
    > input{
      border-color: $red;
    }
  }
  > input{
    height:$height;
    border:1px solid $border-color;
    border-radius: 4px;
    padding:0 8px;
    font-size: inherit;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],&[readonly]{
      border-color: #bbb;
      color:#bbb;
      cursor: not-allowed;
    }
  }
  .icon-error{
    fill:$red;
    vertical-align: middle;
  }
  .errorMessage{
    color:$red;
  }
}
</style>