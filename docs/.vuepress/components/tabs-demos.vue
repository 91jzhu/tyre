<template>
  <t-code :content="value">
    <t-tabs selected="2">
      <t-tabs-head>
        <t-tabs-item name="1">体育</t-tabs-item>
        <t-tabs-item name="2">汽车</t-tabs-item>
        <t-tabs-item name="3" disabled>股票</t-tabs-item>
      </t-tabs-head>
      <t-tabs-body>
        <t-tabs-pane name="1">世界杯</t-tabs-pane>
        <t-tabs-pane name="2">兰博基尼</t-tabs-pane>
        <t-tabs-pane name="3">证券</t-tabs-pane>
      </t-tabs-body>
    </t-tabs>
  </t-code>
</template>

<script>
import Code from '../../../src/code.vue'
import Tabs from '../../../src/tabs.vue'
import TabsBody from '../../../src/tabs-body.vue'
import TabsHead from '../../../src/tabs-head.vue'
import TabsItem from '../../../src/tabs-item.vue'
import TabsPane from '../../../src/tabs-pane.vue'
export default {
  name: "tabs-demos",
  components:{
    't-tabs':Tabs,
    't-code':Code,
    't-tabs-body':TabsBody,
    't-tabs-head':TabsHead,
    't-tabs-item':TabsItem,
    't-tabs-pane':TabsPane
  },
  data(){
    return{
      value:`
    <t-tabs selected="sports">
      <t-tabs-head>
        <t-tabs-item name="sports">体育</t-tabs-item>
        <t-tabs-item name="car">汽车</t-tabs-item>
        <t-tabs-item name="finance" disabled>股票</t-tabs-item>
      </t-tabs-head>

      <t-tabs-body>
        <t-tabs-pane name="sports">世界杯</t-tabs-pane>
        <t-tabs-pane name="car">兰博基尼</t-tabs-pane>
        <t-tabs-pane name="finance">证券</t-tabs-pane>
      </t-tabs-body>
    </t-tabs>
      `
    }
  }
}
</script>

<style lang="scss" scoped>

</style>