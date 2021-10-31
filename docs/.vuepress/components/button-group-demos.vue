<template>
  <div>
    <t-code :content="value">
      <t-button-group>
        <t-button icon="left"></t-button>
        <t-button icon="right"></t-button>
      </t-button-group>
      <div style="height:20px;"></div>
      <t-button-group>
        <t-button icon="setting">设置按钮</t-button>
        <t-button icon="download">下载按钮</t-button>
        <t-button loading>加载按钮</t-button>
      </t-button-group>
    </t-code>
  </div>
</template>

<script>
import Button from '../../../src/button.vue'
import ButtonGroup from "../../../src/button-group";
import Code from '../../../src/code.vue'

export default {
  name: "button-group-demos",
  components: {
    't-button': Button,
    't-code': Code,
    't-button-group': ButtonGroup
  },
  data() {
    return {
      value: `
      <t-button-group>
        <t-button icon="left"></t-button>
        <t-button icon="right"></t-button>
      </t-button-group>

      <t-button-group>
        <t-button icon="setting">设置按钮</t-button>
        <t-button icon="download">下载按钮</t-button>
        <t-button loading>加载按钮</t-button>
      </t-button-group>
      `
    }
  }
}
</script>

<style lang="scss" scoped>

</style>