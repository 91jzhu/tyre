import Vue from "vue";
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from "./col"
import Layout from "./layout";
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
Vue.component('t-button-group', ButtonGroup)

Vue.component('t-input', Input)

Vue.component('t-toast', Toast)

Vue.component('t-row', Row)
Vue.component('t-col', Col)

Vue.component('t-layout', Layout)
Vue.component('t-sider', Sider)
Vue.component('t-content', Content)
Vue.component('t-footer', Footer)
Vue.component('t-header', Header)

Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-pane', TabsPane)

Vue.component('t-popover', Popover)

Vue.component('t-collapse', Collapse)
Vue.component('t-collapse-item', CollapseItem)

Vue.use(plugin)

new Vue({
    el: "#app",
})


