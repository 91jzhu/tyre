<template>
  <div>
    <t-code :content="value1">
      <t-collapse :selected="['1','2']">
        <t-collapse-item title="标题1" name="1">内容1</t-collapse-item>
        <t-collapse-item title="标题2" name="2">内容2</t-collapse-item>
        <t-collapse-item title="标题3" name="3">内容3</t-collapse-item>
      </t-collapse>
    </t-code>
    <t-code :content="value2">
      <t-collapse :selected="['2']" single>
        <t-collapse-item title="标题1" name="1">内容1</t-collapse-item>
        <t-collapse-item title="标题2" name="2">内容2</t-collapse-item>
        <t-collapse-item title="标题3" name="3">内容3</t-collapse-item>
      </t-collapse>
    </t-code>
  </div>
</template>

<script>
import Code from '../../../src/code.vue'
import Collapse from '../../../src/collapse.vue'
import CollapseItem from '../../../src/collapse-item.vue'

export default {
  name: "accordion-demos",
  components: {
    't-code': Code,
    't-collapse': Collapse,
    't-collapse-item': CollapseItem
  },
  data() {
    return {
      value1: `
      <t-collapse :selected="['1','2']">
        <t-collapse-item title="标题1" name="1">内容1</t-collapse-item>
        <t-collapse-item title="标题2" name="2">内容2</t-collapse-item>
        <t-collapse-item title="标题3" name="3">内容3</t-collapse-item>
      </t-collapse>
      `,
      value2:`
      <t-collapse :selected="['2']" single>
        <t-collapse-item title="标题1" name="1">内容1</t-collapse-item>
        <t-collapse-item title="标题2" name="2">内容2</t-collapse-item>
        <t-collapse-item title="标题3" name="3">内容3</t-collapse-item>
      </t-collapse>
      `
    }
  }
}
</script>

<style lang="scss" scoped>
//.wrapper{
//
//  border:1px solid red;
//}
</style>