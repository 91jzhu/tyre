<template>
  <div>
    <t-input value='wang'></t-input>
    <t-input disabled value='content'></t-input>
    <t-input readonly value='content'></t-input>
    <t-input error="错误" value='content'></t-input>

  </div>
</template>

<script>
import Vue from "vue";

// Vue.use(t-icon)
import Input from '../../../src/input.vue'
import Icon from '../../../src/icon.vue'


export default {
  components:{
    't-input':Input,
    't-icon':Icon
  }
}
</script>

<style lang="scss" scoped>

</style>