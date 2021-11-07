<template>
  <div>
    <t-code :content="value" style="margin-top: 60px;">
      <t-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>点我</t-button>
      </t-popover>
      <t-popover>
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>点我</t-button>
      </t-popover>
      <t-popover position="bottom">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>点我</t-button>
      </t-popover>
      <t-popover position="right">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>点我</t-button>
      </t-popover>
      <div style="width:100%;height:110px"></div>
      <t-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>悬浮</t-button>
      </t-popover>
      <t-popover position="top" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>悬浮</t-button>
      </t-popover>
      <t-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>悬浮</t-button>
      </t-popover>
      <t-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>悬浮</t-button>
      </t-popover>
    </t-code>
  </div>
</template>

<script>
import Code from '../../../src/code.vue'
import Popover from '../../../src/popover.vue'
import Button from '../../../src/button.vue'
export default {
  name: "popover",
  components:{
    't-code':Code,
    't-popover':Popover,
    't-button':Button
  },
  data(){
    return{
      value:`
     <t-popover position="bottom">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <span>点我<span>
      </t-popover>

      <t-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <t-button>悬浮</t-button>
      </t-popover>
      `
    }
  }
}
</script>

<style lang="scss" scoped>

</style>