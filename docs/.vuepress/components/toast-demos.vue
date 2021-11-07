<template>
  <div>
    <t-code :content="value">
        <t-button @click="showToast1">顶部的吐司</t-button>
        <t-button @click="showToast2">中间的吐司</t-button>
        <t-button @click="showToast3">底部的吐司</t-button>
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
  data() {
    return {
      value: `
   methods:{
     showToast() {
         this.$toast('我在中间', {
         autoClose:false, //是否自动关闭
         autoClassDelay: 2,  //若选择自动关闭， toast 的持续时间
         enabledHtml: true, //是否允许内容显示HTML
         position: 'middle',  //出现的位置，['top','middle','bottom']默认为 top
         closeButton: {  //设置关闭按钮的文字和你想要在关闭时执行的回调
                text: '知道啦',
                callback: () => {}
            }
         })
     }
   }
      <t-button @click="showToast">顶部的吐司</t-button>
      <t-button @click="showToast">中间的吐司</t-button>
      <t-button @click="showToast">底部的吐司</t-button>
      `
    }
  },
  components: {
    't-code': Code,
    't-toast': Toast,
    't-button': Button
  },
  methods: {
    showToast1() {
      this.$toast('我在顶部', {
        autoClassDelay: 3,
        position: 'top',
        closeButton: {
          text: '知道啦',
          callback: () => {/*你想执行的回调*/
          }
        }
      })
    },
    showToast2() {
      this.$toast('我一会才会关闭', {
        autoClassDelay: 3,
        enabledHtml: true,
        position: 'middle',
      })
    },
    showToast3() {
      this.$toast('<a href="https://baidu.com">去百度</a>', {
        autoClassDelay: 2,
        position: 'bottom',
        enabledHtml: true,
        closeButton: {
          text: '知道啦',
          callback: () => {/*你想执行的回调*/
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>