---
sidebarDepth: 2
---
# 吐司 | toast

## 使用方法
一个弹窗组件，使用时不仅需要引入 toast 组件，还要加载 plugin 插件，方法是 Vue.use(plugin)

你可以在 methods 中配置 toast 的选项

你可以只配置 autoClassDelay 在你想要自动关闭的时候

自动关闭和 closeButton 并不冲突，你可以人性化地设置你的 toast，比如顶部的吐司

或者选择不设置关闭按钮，也就是不配置 closeButton，来提示一些重要信息，比如中间的吐司，你必须等待 3 秒，它才会自动关闭

你还可以在 toast 里面包含 Html 内容，来让用户跳转，比如底部的吐司

<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>