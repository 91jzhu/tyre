---
sidebarDepth: 2
---
# 栅格布局

## 使用方法

我们默认将 t-row 的宽度看成 24，然后可以在 t-col 上绑定 span 的数值来分配每个栅格的占比，注意，在不设置 offset(下文会说)的情况下，最好让 t-col 的 span 之和为 24

你可以看到，栗子中栅格之间的距离是恒定的，这是由于在 t-row 上绑定了 gutter 属性，来写死间隔

使用 offset 可以设置间隔，不同于 gutter 的间隔设置，offset 的数值也参与构成 t-row 的宽度

你还可以在 t-col 上绑定以做到响应式，这并不与本来的 span 冲突，它会在你设置的样式之外生效，比如第三个例子，试着改变屏幕的宽度来观察

<strong>请注意，最好设置 span 的占比，避免在某个宽度下没有样式的问题</strong>

```
:ipad="{span:number;offset:number}" 还支持narrowPc，pc，widePc 
    下面是各属性对应的范围
        ipad >= 577 px
        narrowPc >=768px
        pc >= 992px
        widePc >= 1200px
```

<grid-demos></grid-demos>