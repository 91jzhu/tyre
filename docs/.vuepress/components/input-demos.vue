<template>
  <div>
    <t-code :content="value">
      <t-input content='我的输入框' style="flex-direction: row"></t-input>
      <br/>
      <t-input disabled content='我的输入框' style="flex-direction: row"></t-input>
      <br/>
      <t-input readonly content='我的输入框' style="flex-direction: row"></t-input>
      <br/>
      <t-input error="错误" content='我的输入框' style="flex-direction: row"></t-input>
    </t-code>
  </div>
</template>

<script>
import Input from '../../../src/input.vue'
import Code from '../../../src/code.vue'
export default {
  data() {
    return {
      show: false,
      value: `
        <t-input content='我的输入框'></t-input>

        <t-input disabled content='我的输入框'></t-input>

        <t-input readonly content='我的输入框'></t-input>

        <t-input error="错误" content='我的输入框'></t-input>`
    }
  },
  components: {
    't-input': Input,
    't-code': Code
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>