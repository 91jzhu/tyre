<template>
  <div>

    <t-code :content="value">
      <t-layout style="min-height: 15vh;">
        <t-header class="head">Header</t-header>
        <t-content class="content">Content</t-content>
        <t-footer class="foot">Footer</t-footer>
      </t-layout>
    </t-code>

    <t-code :content="value2">
      <t-layout style="min-height: 15vh;">
        <t-header class="head">Header</t-header>
        <t-layout style="min-height: 15vh;">
          <t-sider class="sider">Sider</t-sider>
          <t-content class="content">Content</t-content>
        </t-layout>
        <t-footer class="foot">Footer</t-footer>
      </t-layout>
    </t-code>

    <t-code :content="value3">
      <t-layout style="min-height: 15vh;">
        <t-header class="head">Header</t-header>
        <t-layout style="min-height: 15vh;">
          <t-content class="content">Content</t-content>
          <t-sider class="sider">Sider</t-sider>
        </t-layout>
        <t-footer class="foot">Footer</t-footer>
      </t-layout>
    </t-code>

    <t-code :content="value4">
      <t-layout style="min-height: 15vh;">
        <t-sider class="sider">Sider</t-sider>
        <t-layout style="min-height: 15vh;">
          <t-header class="head">Header</t-header>
          <t-content class="content">Content</t-content>
          <t-footer class="foot">Footer</t-footer>
        </t-layout>
      </t-layout>
    </t-code>


  </div>
</template>

<script>
import Code from '../../../src/code.vue'
import Layout from '../../../src/layout.vue'
import Header from '../../../src/header.vue'
import Content from '../../../src/content.vue'
import Footer from '../../../src/footer.vue'
import Sider from '../../../src/sider.vue'

export default {

  data() {
    return {
      show: false,
      value: `
        <t-layout">
          <t-header>Header</t-header>
          <t-content>Content</t-content>
          <t-footer>Footer</t-footer>
        </t-layout>`,
      value2: `
          <t-layout>
            <t-header>Header</t-header>
            <t-layout>
              <t-sider>Sider</t-sider>
              <t-content>Content</t-content>
            </t-layout>
            <t-footer>Footer</t-footer>
          </t-layout>
      `,
      value3: `
          <t-layout>
            <t-header>Header</t-header>
            <t-layout>
              <t-content>Content</t-content>
              <t-sider>Sider</t-sider>
            </t-layout>
            <t-footer>Footer</t-footer>
          </t-layout>
      `,
      value4: `
          <t-layout>
            <t-sider>Sider</t-sider>
            <t-layout>
              <t-header>Header</t-header>
              <t-content>Content</t-content>
              <t-footer>Footer</t-footer>
            </t-layout>
          </t-layout>
      `
    }
  },
  components: {
    't-code': Code,
    't-layout': Layout,
    't-header': Header,
    't-sider': Sider,
    't-content': Content,
    't-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
.sider {
  text-align: center;
  padding: 10px;
  background: deepskyblue;
  min-height: 2vh;
}

.head {
  text-align: center;
  padding: 10px;
  background: skyblue;
  min-height: 2vh;
}

.content {
  text-align: center;
  padding: 10px;
  background: cornflowerblue;
  min-height: 6vh;
}

.foot {
  text-align: center;
  padding: 10px;
  background: skyblue;
  min-height: 2vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>