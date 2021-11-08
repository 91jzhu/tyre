---
sidebarDepth: 2
---
# 气泡卡片 | popover

## 使用方法

拥有四个方位，使用 position 来控制，['top', 'bottom', 'left', 'right']

两种激活 popover 的方式，默认选择 click 或者手动选择 hover

同一种激活方式同时只能出现一个 popover

选择 click 激活，你可以处理 popover内容而不会导致其关闭，因为在 click 方式下，点击其他地方会造成 popover 的关闭

<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>