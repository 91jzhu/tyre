<template>
  <div>
    <t-code :content="value">
      <t-button @click="showToast">点击出现吐司</t-button>
    </t-code>
  </div>
</template>

<script>
import Code from '../../../src/code.vue'
import Toast from '../../../src/toast.vue'
import Button from '../../../src/button.vue'
import plugin from '../../../src/plugin'
import Vue from "vue";
Vue.use(plugin)
export default {
  name: "toast",
  data(){
    return{
      value:`
        <t-button @click="showToast"></t-button>
      `
    }
  },
  components:{
    't-code': Code,
    't-toast':Toast,
    't-button':Button
  },
  methods:{
    showToast() {
      this.$toast('我是展示',{
        autoClassDelay: 10000,
        position:'top'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>