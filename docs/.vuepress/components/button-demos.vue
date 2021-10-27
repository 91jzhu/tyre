<template>
  <div>
    <div class="wrapper">
      <div>
        <t-button>默认按钮</t-button>
        <t-button icon="setting">设置按钮</t-button>
        <t-button icon="download">下载按钮</t-button>
        <t-button icon="good">点赞按钮</t-button>
        <t-button loading>加载按钮</t-button>
        <t-button disabled>禁用按钮</t-button>
      </div>
      <t-button class="btn" @click="show=!show">< / ></t-button>
    </div>
    <transition name="fade">
      <pre class="pre" v-show="show">
        <code>{{ content }}</code>
      </pre>
    </transition>
  </div>
</template>

<script>
import Button from '../../../src/button.vue'
import Popover from '../../../src/popover.vue'

export default {
  data() {
    return {
      show: false,
      content: `
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
    't-popover': Popover
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;

  > .pre {
    font-size: 20px;
  }

  > .btn {
    white-space: nowrap;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>