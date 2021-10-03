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

Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-button-group',ButtonGroup)
Vue.component('t-input',Input)
Vue.component('t-row',Row)
Vue.component('t-col',Col)
Vue.component('t-layout',Layout)
Vue.component('t-sider',Sider)
Vue.component('t-content',Content)
Vue.component('t-footer',Footer)
Vue.component('t-header',Header)

new Vue({
    el: "#app",
})


