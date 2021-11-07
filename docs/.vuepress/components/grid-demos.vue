<template>
  <div>
    <t-code :content="value">
      <t-row gutter="20">
        <t-col span="12" :ipad="{span:6}">
          <div class="child1">grid</div>
        </t-col>
        <t-col span="12" :ipad="{span:18}">
          <div class="child2">grid</div>
        </t-col>
      </t-row>
      <br/>
      <t-row>
        <t-col span="12">
          <div class="child1">grid</div>
        </t-col>
        <t-col span="10" offset="2">
          <div class="child2">grid</div>
        </t-col>
      </t-row><br/>
      <t-row gutter="20">
        <t-col span="8" :narrow-pc="{span:6}">
          <div class="child1">grid</div>
        </t-col>
        <t-col span="8" :narrow-pc="{span:12}">
          <div class="child2">grid</div>
        </t-col>
        <t-col span="8" :narrow-pc="{span:6}">
          <div class="child1">grid</div>
        </t-col>
      </t-row>
    </t-code>
  </div>
</template>

<script>
import Button from '../../../src/Button.vue'
import Row from '../../../src/row.vue'
import Col from '../../../src/col.vue'
import Code from '../../../src/code.vue'

export default {
  data() {
    return {
      show: false,
      value: `
    <t-row gutter="20">
      <t-col span="12">
        <div>grid</div>
      </t-col>
      <t-col span="12">
        <div>grid</div>
      </t-col>
    </t-row>

    <t-row>
      <t-col span="12">
        <div>grid</div>
      </t-col>
      <t-col span="10" offset="2">
        <div>grid</div>
      </t-col>
    </t-row>
      `
    }
  },
  components: {
    't-code':Code,
    't-button': Button,
    't-row': Row,
    't-col': Col
  }
}
</script>

<style lang="scss" scoped>
.toastWrapper {
    border: 1px solid red;
    flex-direction: column;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.child1 {
  background: deepskyblue;
  padding: 10px;
}

.child2 {
  background: lightskyblue;
  padding: 10px;
}
</style>