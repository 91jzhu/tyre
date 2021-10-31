<template>
  <div>
    <div class="toastWrapper">
      <div>
        <slot></slot>
      </div>
      <t-button class="btn" @click="show=!show">< / ></t-button>
    </div>
    <transition name="fade">
      <pre style="font-size: 24px" v-show="show">
        <code>
          {{ content }}
        </code>
      </pre>
    </transition>
  </div>
</template>

<script>
import Button from './button.vue'
export default {
  name: "code.vue",
  data(){
    return{
      show:false
    }
  },
  props:['content'],
  components:{
    't-button':Button
  }
}
</script>

<style lang="scss" scoped>
.toastWrapper {
  display: flex;
  flex-direction: column;

  > .pre{
    line-height: 20px;
  }

  > .btn {
    align-self: flex-end;
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