---
sidebarDepth: 2
---
# Tab 切换 | tabs

## 使用方法

精简的 Tab 切换，你可以用 selected 来选择初始停留在哪一页

必须为每个 tabs-item 和 tabs-pane 都绑定一一对应的 name，可以为数字或者字符串

你甚至可以在 tabs-item 上绑定 disabled 来禁用此卡片(股票)，当然此时 selected 失效，默认为前一个卡片

<strong>请注意，tabs 里面最好只包含 tabs-head 和 tabs-body</strong>

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>