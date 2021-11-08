---
sidebarDepth: 2
---
# 手风琴 | collapse

## 使用方法

在 t-collapse 上动态绑定 selected 来控制初始展开的 item，这也是你需要设置 name 的原因

在 t-collapse-item 上绑定 title 为你想要设置的标题

还可以绑定 single 来使其成为真正的手风琴，此时设置 selected 为多个展开也是可以的，但是点击之后只能单开

<strong>请注意，selected 中元素的类型必须为 String，也就是必须和 name 的类型一致</strong>

<ClientOnly>
<accordion-demos></accordion-demos>
</ClientOnly>