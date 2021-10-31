<template>
  <div>
    <t-code :content="value">
      <t-button>默认按钮</t-button>
      <t-button icon="setting">设置按钮</t-button>
      <t-button icon="download">下载按钮</t-button>
      <t-button icon="good">点赞按钮</t-button>
      <t-button loading>加载按钮</t-button>
      <t-button disabled>禁用按钮</t-button>
    </t-code>
  </div>
</template>

<script>
import Button from '../../../src/button.vue'
import Code from '../../../src/code.vue'

export default {
  data() {
    return {
      value: `
        <t-button>默认按钮</t-button>

        <t-button icon="setting">设置按钮</t-button>

        <t-button icon="download">下载按钮</t-button>

        <t-button icon="good">点赞按钮</t-button>

        <t-button loading>加载按钮</t-button>

        <t-button disabled>禁用按钮</t-button>`
    }
  },
  components: {
    't-button': Button,
    't-code':Code
  }
}
</script>

<style lang="scss" scoped>

</style>