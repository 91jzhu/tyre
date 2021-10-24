<template>
  <div class="collapse-item">
    <div class="title" @click="isOpen=!isOpen">
      {{title}}
    </div>
    <div class="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isOpen:false
    }
  },
  props: {
    title: {
      type: String,
      required:true,
    }
  }
}
</script>

<style lang="scss" scoped>
$grey:#ddd;
$border-radius:4px;
.collapse-item{
  > .title{
    border:1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0 8px;
  }
  &:first-child{
    > .title{
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child{
    margin-bottom: -1px;
    > .title{
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content{
      padding:8px;
  }
}
</style>